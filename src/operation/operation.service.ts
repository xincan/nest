import {Injectable, Logger} from '@nestjs/common';
import {Operation} from './operation.entity';
import {IOperationService } from './operation.interface';
import {StringUtils} from "../utils/utils.string";

/**
 * 操作信息接口实现层
 */
@Injectable()
export class OperationService implements IOperationService {

    /**
     * 添加操作信息
     * @param user
     */
    async save(operation: Operation): Promise<Operation> {
        return await Operation.save(operation);
    }

    /**
     * 根据操作ID修改操作信息
     * @param user
     */
    async update(operation: Operation): Promise<number> {
        return await Operation.update(operation.id, operation).then(result => {
            return 1;
        }).catch( error => {
            Logger.log(error);
            return 0;
        });
    }

    /**
     * 根据ID删除操作信息
     * @param id
     */
    async delete(id: string): Promise<number> {
        return await Operation.delete(id.split(',')).then( result => {
            return 1;
        }).catch( error => {
            Logger.log(error);
            return 0;
        });
    }

    /**
     * 分页查询操作信息
     * @param page
     */
    async findPage(page): Promise<[Operation[], number]> {
        const asName = 'o'
        ,list = Operation.createQueryBuilder(asName);
        if ( page !== null ) {
            if (StringUtils.isNotEmpty(page.menuName)) {
                list.andWhere(asName + '.operation_name=:operationName', {menuName: page.menuName});
            }
            list.skip((page.page - 1) * page.size);
            list.take(page.size);
            list.orderBy(
                asName + '.' + page.sortName.replace(/([A-Z])/g, '_$1').toLowerCase(),
                page.sortType.toUpperCase()
            );
            Logger.log(list.getSql())
            return await list.getManyAndCount();
        }
        return null;
    }

    /**
     * 根据操作ID查询操作信息
     * @param id
     */
    async findById(id: number): Promise<Operation> {
        return await Operation.findOne(id);
    }

}
