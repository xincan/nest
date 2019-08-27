import {Permission} from './permission.entity';

/**
 * 权限信息接口层
 */
export interface IPermissionService {

    /**
     * 保存权限信息
     * @param user
     */
    save(permission: Permission): Promise<Permission>;

    /**
     * 修改权限信息
     * @param user
     */
    update(permission: Permission): Promise<number>;

    /**
     * 删除权限信息
     * @param id
     */
    delete(id: string): Promise<number>;

    /**
     * 根据条件分页查询权限信息
     * @param page
     */
    findPage(page): Promise<[Permission[], number]>;

    /**
     * 根据ID查询权限信息
     * @param id
     */
    findById(id: number): Promise<Permission>;

}
