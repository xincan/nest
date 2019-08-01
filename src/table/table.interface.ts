import {TableOption} from './table.entity';

/**
 * 用户操作列表接口
 */
export interface ITableOptionService {

    /**
     * 保存用户操作列表动作信息
     * @param table
     */
    save(table: TableOption): Promise<TableOption>;

    /**
     * 根据表名查询列表操作信息
     * @param param
     */
    findByName(param): Promise<TableOption>;

}
