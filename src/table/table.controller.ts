import { Controller, Inject, Body, Put, Patch, Post, Get, Logger, Query } from '@nestjs/common';
import {ITableOptionService} from './table.interface';
import {TableOption} from './table.entity';
import {ResultObject} from '../result/result.object';

/**
 * 用户操作列表控制层
 */
@Controller('table')
export class TableOptionController {

    /**
     * 注入用户操作列表接口
     * @param tableOptionService
     */
    constructor(@Inject('TableOptionService') private readonly tableOptionService: ITableOptionService) {}

    /**
     * 增加用户操作表格信息
     */
    @Put('save')
    async save(@Body() table: TableOption): Promise<ResultObject> {
        const result = await this.tableOptionService.save(table);
        if (result !== null) {
            return new ResultObject(200, 1, '增加表格操作成功', result);
        } else {
            return new ResultObject(500, 0, '增加表格操作失败', null);
        }
    }

    /**
     * 根据表格名称查询对应表格列信息
     * @param id
     */
    @Get('find')
    async findByName(@Query() param): Promise<ResultObject> {
        const result = await this.tableOptionService.findByName(param);
        if (result !== null) {
            return new ResultObject(200, 1, '查询表格操作成功', result);
        } else {
            return new ResultObject(500, 0, '查询表格操作失败', null);
        }
    }

}
