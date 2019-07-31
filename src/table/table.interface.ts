import {TableOption} from './table.entity';

export interface ITableOptionService {

    save(table: TableOption): Promise<TableOption>;

    findByName(name): Promise<TableOption>;

}
