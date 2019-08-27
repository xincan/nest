import {Role} from './role.entity';

/**
 * 权限信息接口层
 */
export interface IRoleService {

    /**
     * 保存权限信息
     * @param user
     */
    save(role: Role): Promise<Role>;

    /**
     * 修改权限信息
     * @param user
     */
    update(role: Role): Promise<number>;

    /**
     * 删除权限信息
     * @param id
     */
    delete(id: string): Promise<number>;

    /**
     * 根据条件分页查询权限信息
     * @param page
     */
    findPage(page): Promise<[Role[], number]>;

    /**
     * 根据ID查询权限信息
     * @param id
     */
    findById(id: number): Promise<Role>;

}
