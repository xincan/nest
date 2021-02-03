import {Controller, Get, Inject, Param, Put, Body, Post, Query, Patch, Delete, Logger} from '@nestjs/common';
import {Menu} from './menu.entity';
import {IMenuService, IMenuOperationService} from './menu.interface';
import {ResultObject} from '../result/result.object';

/**
 * 菜单信息控制层
 */
@Controller('/menu')
export class MenuController {

    /**
     * 注入菜单信息接口
     * @param menuService
     */
    constructor(@Inject('MenuService') private readonly menuService: IMenuService) {}

    /**
     * 根据菜单ID查询菜单信息（路径形式）
     * @param appId
     */
    @Get('list')
    async findByMenus(@Query("appId") appId: number): Promise<ResultObject> {
        const result = await this.menuService.findByMenus(appId);
        if (result !== null) {
            return new ResultObject(200, 1, '查询菜单成功', result);
        } else {
            return new ResultObject(500, 0, '查询菜单失败', null);
        }
    }

    /**
     * 根据菜单ID查询菜单信息（路径形式）
     * @param id
     */
    @Get('tree')
    async findByTreeMenu(): Promise<ResultObject> {
        const result = await this.menuService.findByTreeMenu();
        if (result !== null) {
            return new ResultObject(200, 1, '查询菜单成功', result);
        } else {
            return new ResultObject(500, 0, '查询菜单失败', null);
        }
    }

    /**
     * 根据ID删除菜单信息
     */
    @Post('delete')
    async delete(@Body('id') id: string): Promise<ResultObject> {
        Logger.log(id);
        const result = await this.menuService.delete(id);
        if (result !== null) {
            return new ResultObject(200, 1, '删除菜单成功', id);
        } else {
            return new ResultObject(500, 0, '删除菜单失败', null);
        }
    }

    /**
     * 根据菜单ID查询菜单信息（路径形式）
     * @param id
     */
    @Get(':id')
    async findByUrlId(@Param('id') id: number): Promise<ResultObject> {
        const result = await this.menuService.findById(id);
        if (result !== null) {
            return new ResultObject(200, 1, '查询菜单成功', result);
        } else {
            return new ResultObject(500, 0, '查询菜单失败', null);
        }
    }

    /**
     * 分页查询菜单信息
     * @param params
     */
    @Get()
    async findPage(@Query() page): Promise<ResultObject> {
        const result = await this.menuService.findPage(page);
        if (result !== null) {
            return new ResultObject(200, result[1], '查询菜单成功', result[0]);
        } else {
            return new ResultObject(500, 0, '查询菜单失败', null);
        }
    }

    /**
     * 增加菜单信息
     */
    @Put()
    async save(@Body() menu: Menu): Promise<ResultObject> {
        const result = await this.menuService.save(menu);
        if (result !== null) {
            return new ResultObject(200, 1, '增加菜单成功', result);
        } else {
            return new ResultObject(500, 0, '增加菜单失败', null);
        }
    }

    /**
     * 修改菜单信息
     */
    @Patch()
    async update(@Body() menu: Menu): Promise<ResultObject> {
        const result = await this.menuService.update(menu);
        if (result > 0) {
            return new ResultObject(200, 1, '修改菜单成功', menu);
        } else {
            return new ResultObject(500, 0, '修改菜单失败', null);
        }
    }
}

/**
 * 菜单信息控制层
 */
@Controller('/menu/operation')
export class MenuOperationController {

    /**
     * 注入菜单信息接口
     * @param userService
     */
    constructor(@Inject('MenuOperationService') private readonly menuOperationService: IMenuOperationService) {}

    /**
     * 保存菜单操作信息
     * @param id
     */
    @Post('/save')
    async saveMenuOperation(@Body() param: any): Promise<ResultObject> {

        const result = param;
        const res = await this.menuOperationService.saveMenuOperation(param);
        if (res !== null) {
            return new ResultObject(200, 1, '查询菜单成功', result);
        } else {
            return new ResultObject(500, 0, '查询菜单失败', null);
        }
    }
}
