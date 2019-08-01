import {ITableOptionService} from './table.interface';
import {TableOption} from './table.entity';
import {Injectable} from '@nestjs/common';

/**
 * 用户操作列表接口实现类
 */
@Injectable()
export class TableOptionService implements ITableOptionService {

    /**
     * 修改用户操作列表信息
     * @param table
     */
    async save(table: TableOption): Promise<TableOption> {
        table.content = JSON.stringify(table.content);
        const result = TableOption.createQueryBuilder().delete().andWhere('name = :name', {name: table.name});
        result.execute();
        return TableOption.save(table);
    }

    /**
     * 根据列表名称查询列表信息
     * @param name
     */
    async findByName(param): Promise<TableOption> {
        return  TableOption.createQueryBuilder('tab').andWhere('tab.name = :name', {name: param.name}).getOne();
    }

}
