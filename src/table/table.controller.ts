import { Controller, Inject, Body, Put, Patch, Post, Get } from '@nestjs/common';
import {ITableOptionService} from './table.interface';
import {TableOption} from './table.entity';
import {ResultObject} from '../result/result.object';

@Controller('table')
export class TableOptionController {
    constructor(@Inject('TableOptionService') private readonly tableOptionService: ITableOptionService) {}

    /**
     * 增加用户操作表格信息
     */
    @Put()
    async save(@Body() table: TableOption): Promise<ResultObject> {
        const result = await this.tableOptionService.save(table);
        if (result !== null) {
            return new ResultObject(200, 1, '增加表格操作成功', result);
        } else {
            return new ResultObject(500, 0, '增加表格操作失败', null);
        }
    }

    /**
     * 修改用户操作表格信息
     */
    // @Patch()
    // async update(@Body() table: TableOption): Promise<number> {
    //     return this.tableOptionService.update(table);
    // }

    /**
     * 根据表格名称查询对应表格列信息
     * @param id
     */
    @Get()
    async findByName(@Body() name: string): Promise<ResultObject> {
        const result = await this.tableOptionService.findByName(name);
        if (result !== null) {
            return new ResultObject(200, 1, '查询表格操作成功', result);
        } else {
            return new ResultObject(500, 0, '查询表格操作失败', null);
        }
    }

}
