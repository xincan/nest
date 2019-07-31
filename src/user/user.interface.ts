import {User} from './user.entity';

export interface IUserService {

    /**
     * 保存用户信息
     * @param user
     */
    save(user: User): Promise<User>;

    /**
     * 修改用户信息
     * @param user
     */
    update(user: User): Promise<number>;

    /**
     * 删除用户信息
     * @param id
     */
    delete(id: string): Promise<number>;

    /**
     * 根据条件分页查询用户信息
     * @param page
     */
    findPage(page): Promise<[User[], number]>;

    /**
     * 根据ID查询用户信息
     * @param id
     */
    findById(id: number): Promise<User>;

}
