import {Controller, Get, Inject, Param, Put, Body, Post, Query, Patch, Delete, Logger} from '@nestjs/common';
import {Permission} from './permission.entity';
import {IPermissionService} from './permission.interface';
import {ResultObject} from '../result/result.object';

/**
 * 权限信息控制层
 */
@Controller('/permission')
export class PermissionController {

    /**
     * 注入权限信息接口
     * @param userService
     */
    constructor(@Inject('PermissionService') private readonly permissionService: IPermissionService) {}

    /**
     * 增加权限信息
     */
    @Put()
    async save(@Body() permission: Permission): Promise<ResultObject> {
        const result = await this.permissionService.save(permission);
        if (result !== null) {
            return new ResultObject(200, 1, '增加权限菜单成功', result);
        } else {
            return new ResultObject(500, 0, '增加权限失败', null);
        }
    }

    /**
     * 修改权限信息
     */
    @Patch()
    async update(@Body() permission: Permission): Promise<ResultObject> {
        const result = await this.permissionService.update(permission);
        if (result > 0) {
            return new ResultObject(200, 1, '修改权限成功', permission);
        } else {
            return new ResultObject(500, 0, '修改权限失败', null);
        }
    }

    /**
     * 根据ID删除权限信息
     */
    @Post('delete')
    async delete(@Body('id') id: string): Promise<ResultObject> {
        Logger.log(id);
        const result = await this.permissionService.delete(id);
        if (result !== null) {
            return new ResultObject(200, 1, '删除权限成功', id);
        } else {
            return new ResultObject(500, 0, '删除权限失败', null);
        }
    }

    /**
     * 分页查询权限信息
     * @param params
     */
    @Get()
    async findPage(@Query() page): Promise<ResultObject> {
        const result = await this.permissionService.findPage(page);
        if (result !== null) {
            return new ResultObject(200, result[1], '查询权限成功', result[0]);
        } else {
            return new ResultObject(500, 0, '查询权限失败', null);
        }
    }

    /**
     * 根据权限ID查询权限信息（路径形式）
     * @param id
     */
    @Get(':id')
    async findByUrlId(@Param('id') id: number): Promise<ResultObject> {
        const result = await this.permissionService.findById(id);
        if (result !== null) {
            return new ResultObject(200, 1, '查询权限成功', result);
        } else {
            return new ResultObject(500, 0, '查询权限失败', null);
        }
    }

}
