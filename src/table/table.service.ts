import {ITableOptionService} from './table.interface';
import {TableOption} from './table.entity';
import {Logger} from '@nestjs/common';

export class TableOptionService implements ITableOptionService {

    /**
     * 修改用户操作列表信息
     * @param table
     */
    async save(table: TableOption): Promise<TableOption> {
        table.content = JSON.stringify(table.content);
        const result = TableOption.createQueryBuilder().delete().andWhere('name = :name', {name: table.name});
        Logger.log(result.getSql());
        result.execute();
        Logger.log(table);
        return TableOption.save(table);
    }

    /**
     * 根据列表名称查询列表信息
     * @param name
     */
    async findByName(param): Promise<TableOption> {
        const result = TableOption.createQueryBuilder('tab').andWhere('tab.name = :name', {name: param.name});
        Logger.log(result.getSql());
        return result.getOne();
    }

}
