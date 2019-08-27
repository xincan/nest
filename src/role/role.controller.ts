import {Controller, Get, Inject, Param, Put, Body, Post, Query, Patch, Delete, Logger} from '@nestjs/common';
import {Role} from './role.entity';
import {IRoleService} from './role.interface';
import {ResultObject} from '../result/result.object';

/**
 * 角色信息控制层
 */
@Controller('/role')
export class RoleController {

    /**
     * 注入角色信息接口
     * @param userService
     */
    constructor(@Inject('RoleService') private readonly roleService: IRoleService) {}

    /**
     * 增加角色信息
     */
    @Put()
    async save(@Body() role: Role): Promise<ResultObject> {
        const result = await this.roleService.save(role);
        if (result !== null) {
            return new ResultObject(200, 1, '增加菜单成功', result);
        } else {
            return new ResultObject(500, 0, '增加菜单失败', null);
        }
    }

    /**
     * 修改角色信息
     */
    @Patch()
    async update(@Body() role: Role): Promise<ResultObject> {
        const result = await this.roleService.update(role);
        if (result > 0) {
            return new ResultObject(200, 1, '修改菜单成功', role);
        } else {
            return new ResultObject(500, 0, '修改菜单失败', null);
        }
    }

    /**
     * 根据ID删除角色信息
     */
    @Post('delete')
    async delete(@Body('id') id: string): Promise<ResultObject> {
        Logger.log(id);
        const result = await this.roleService.delete(id);
        if (result !== null) {
            return new ResultObject(200, 1, '删除菜单成功', id);
        } else {
            return new ResultObject(500, 0, '删除菜单失败', null);
        }
    }

    /**
     * 分页查询角色信息
     * @param params
     */
    @Get()
    async findPage(@Query() page): Promise<ResultObject> {
        const result = await this.roleService.findPage(page);
        if (result !== null) {
            return new ResultObject(200, result[1], '查询菜单成功', result[0]);
        } else {
            return new ResultObject(500, 0, '查询菜单失败', null);
        }
    }

    /**
     * 根据角色ID查询角色信息（路径形式）
     * @param id
     */
    @Get(':id')
    async findByUrlId(@Param('id') id: number): Promise<ResultObject> {
        const result = await this.roleService.findById(id);
        if (result !== null) {
            return new ResultObject(200, 1, '查询菜单成功', result);
        } else {
            return new ResultObject(500, 0, '查询菜单失败', null);
        }
    }

}
