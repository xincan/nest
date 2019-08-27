import {Controller, Get, Inject, Param, Put, Body, Post, Query, Patch, Delete, Logger} from '@nestjs/common';
import {Operation} from './operation.entity';
import {IOperationService} from './operation.interface';
import {ResultObject} from '../result/result.object';

/**
 * 操作信息控制层
 */
@Controller('/operation')
export class OperationController {

    /**
     * 注入操作信息接口
     * @param userService
     */
    constructor(@Inject('OperationService') private readonly operationService: IOperationService) {}

    /**
     * 增加操作信息
     */
    @Put()
    async save(@Body() operation: Operation): Promise<ResultObject> {
        const result = await this.operationService.save(operation);
        if (result !== null) {
            return new ResultObject(200, 1, '增加菜单成功', result);
        } else {
            return new ResultObject(500, 0, '增加菜单失败', null);
        }
    }

    /**
     * 修改操作信息
     */
    @Patch()
    async update(@Body() operation: Operation): Promise<ResultObject> {
        const result = await this.operationService.update(operation);
        if (result > 0) {
            return new ResultObject(200, 1, '修改菜单成功', operation);
        } else {
            return new ResultObject(500, 0, '修改菜单失败', null);
        }
    }

    /**
     * 根据ID删除操作信息
     */
    @Post('delete')
    async delete(@Body('id') id: string): Promise<ResultObject> {
        Logger.log(id);
        const result = await this.operationService.delete(id);
        if (result !== null) {
            return new ResultObject(200, 1, '删除菜单成功', id);
        } else {
            return new ResultObject(500, 0, '删除菜单失败', null);
        }
    }

    /**
     * 分页查询操作信息
     * @param params
     */
    @Get()
    async findPage(@Query() page): Promise<ResultObject> {
        const result = await this.operationService.findPage(page);
        if (result !== null) {
            return new ResultObject(200, result[1], '查询菜单成功', result[0]);
        } else {
            return new ResultObject(500, 0, '查询菜单失败', null);
        }
    }

    /**
     * 根据菜单ID查询操作信息（路径形式）
     * @param id
     */
    @Get(':id')
    async findByUrlId(@Param('id') id: number): Promise<ResultObject> {
        const result = await this.operationService.findById(id);
        if (result !== null) {
            return new ResultObject(200, 1, '查询菜单成功', result);
        } else {
            return new ResultObject(500, 0, '查询菜单失败', null);
        }
    }

}
