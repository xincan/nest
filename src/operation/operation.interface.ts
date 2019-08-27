import {Operation} from './operation.entity';

/**
 * 操作信息接口层
 */
export interface IOperationService {

    /**
     * 保存操作信息
     * @param user
     */
    save(operation: Operation): Promise<Operation>;

    /**
     * 修改操作信息
     * @param user
     */
    update(operation: Operation): Promise<number>;

    /**
     * 删除操作信息
     * @param id
     */
    delete(id: string): Promise<number>;

    /**
     * 根据条件分页查询操作信息
     * @param page
     */
    findPage(page): Promise<[Operation[], number]>;

    /**
     * 根据操作ID查询操作信息
     * @param id
     */
    findById(id: number): Promise<Operation>;

}
