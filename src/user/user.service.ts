import {Injectable, Logger} from '@nestjs/common';
import {User} from './user.entity';
import { IUserService } from './user.interface';
import {StringUtils} from "../utils/utils.string";

/**
 * 用户信息接口实现层
 */
@Injectable()
export class UserService implements IUserService {

    /**
     * 添加用户信息
     * @param user
     */
    async save(user: User): Promise<User> {
        return User.save(user);
    }

    /**
     * 根据用户ID修改用户信息
     * @param user
     */
    async update(user: User): Promise<number> {
        return await User.update(user.id, user).then(result => {
            return 1;
        }).catch( error => {
            Logger.log(error);
            return 0;
        });
    }

    /**
     * 根据ID删除用户信息
     * @param id
     */
    async delete(id: string): Promise<number> {
        return await User.delete(id.split(',')).then( result => {
            return 1;
        }).catch( error => {
            Logger.log(error);
            return 0;
        });
    }

    /**
     * 分页查询用户信息
     * @param page
     */
    async findPage(page): Promise<[User[], number]> {
        const list = User.createQueryBuilder('user');

        if ( page !== null ) {
            if (page.loginName !== undefined && page.loginName !== null && page.loginName.length > 0) {
                list.andWhere('user.login_name=:loginName', {loginName: page.loginName});
            }

            if (page.name !== undefined && page.name !== null  && page.name.length > 0) {
                list.andWhere('user.name=:name', {name: page.name});
            }

            if (page.sex !== undefined && page.sex !== null  && page.sex.length > 0) {
                list.andWhere('user.sex=:sex', {sex: page.sex});
            }

            if (page.areaId !== undefined && page.areaId !== null  && page.areaId.length > 0) {
                list.andWhere('user.area_id=:areaId', {areaId: page.areaId});
            }

            if (page.organizationId !== undefined && page.organizationId !== null  && page.organizationId.length > 0) {
                list.andWhere('user.organization_id=:organizationId', {organizationId: page.organizationId});
            }
            list.skip((page.page - 1) * page.size);
            list.take(page.size);
            list.orderBy(
                'user.' + page.sortName.replace(/([A-Z])/g, '_$1').toLowerCase(),
                page.sortType.toUpperCase()
            );
            Logger.log(list.getSql())
            return list.getManyAndCount();
        }
        return null;
    }

    /**
     * 根据ID查询用户信息
     * @param id
     */
    async findById(id: number): Promise<User> {
        return User.findOne(id);
    }

    /**
     * 分页查询用户信息
     * @param page
     */
    async bootstrap(page): Promise<[User[], number]> {
        Logger.log(page);
        const list = User.createQueryBuilder('user');

        if ( page !== null ) {

            if(page.search && page.search !== null && page.search !== ''){
                const search = JSON.parse(page.search)
                console.log(search);
                if (search.name !== undefined && search.name !== null  && search.name.length > 0) {
                    list.andWhere('user.name=:name', {name: search.name});
                }
            }

            list.skip((page.page - 1) * page.limit);
            list.take(page.limit);
            list.orderBy('user.' + page.sortName.replace(/([A-Z])/g, '_$1').toLowerCase(), page.sortType.toUpperCase());
            Logger.log(list.getSql())
            return list.getManyAndCount();
        }
        return null;
    }

    /**
     * 查询所有数据
     */
    async findByUser(param): Promise<[User[], number]> {

        const list = User.createQueryBuilder('user');

        if (StringUtils.isNotEmpty(param.loginName)) {
            list.andWhere("user.login_name like :loginName").setParameters({
                loginName: '%' + param.loginName + '%'
            });
        }

        if (StringUtils.isNotEmpty(param.name)) {
            list.andWhere("user.name like :name").setParameters({
                name: '%' + param.name + '%'
            });
        }

        if (param.sex !== undefined && param.sex !== null) {
            list.andWhere('user.sex=:sex', {sex: param.sex});
        }
        Logger.log(list.getSql())
        return  list.getManyAndCount();
    }
}
