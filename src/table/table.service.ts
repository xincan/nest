import {ITableOptionService} from './table.interface';
import {TableOption} from './table.entity';

export class TableOptionService implements ITableOptionService {

    async save(table: TableOption): Promise<TableOption> {
        return TableOption.save(table);
    }

    async findByName(name: string): Promise<TableOption> {
        return TableOption.findOne(name);
    }

}
