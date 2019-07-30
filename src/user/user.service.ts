import { Injectable } from '@nestjs/common';
import {User} from './user.entity';
import { IUserService } from './user.interface';
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
    update(user: User): number {
        // // tslint:disable-next-line:no-console
        // console.log(user);
        // const sql =  User.createQueryBuilder('user').update({name: user.name}).andWhere('id = :id', {id: user.id});
        // // tslint:disable-next-line:no-console
        // console.log(sql.getSql());
        // sql.execute();
        // // @ts-ignore

        const upd = User.update(user.id, user);
        upd.then(result => {
            // tslint:disable-next-line:no-console
            console.log(result);
            return result.raw.serverStatus === 2 ? 1 : 0;
        }).catch( error => {
            // tslint:disable-next-line:no-console
            console.log(error);
            return 0;
        });
        return 0;
    }

    /**
     * 根据ID删除用户信息
     * @param id
     */
    delete(id: number): Promise<User> {
        return User.delete(id).then();
    }

    /**
     * 分页查询用户信息
     * @param page
     */
    findPage(page): Promise<User[]> {
        const list = User.createQueryBuilder('user');

        if ( page !== null ) {
            if (page.loginName !== undefined && page.loginName !== null) {
                list.andWhere('user.login_name=:loginName', {loginName: page.loginName});
            }

            if (page.name !== undefined && page.name !== null) {
                list.andWhere('user.name=:name', {name: page.name});
            }

            if (page.sex !== undefined && page.sex !== null) {
                list.andWhere('user.sex=:sex', {sex: page.sex});
            }

            if (page.areaId !== undefined && page.areaId !== null) {
                list.andWhere('user.area_id=:areaId', {areaId: page.areaId});
            }

            if (page.organizationId !== undefined && page.organizationId !== null) {
                list.andWhere('user.organization_id=:organizationId', {organization: page.organizationId});
            }
            list.skip(page.page);
            list.take(page.size);
            list.orderBy('user.' + page.sortName.replace(/([A-Z])/g, '_$1').toLowerCase(), page.sortType);
            // tslint:disable-next-line:no-console
            console.log(list.getSql());
            return list.getMany();
        }
        return null;
    }

    /**
     * 根据ID查询用户信息
     * @param id
     */
    findById(id: number): Promise<User> {
        return User.findOne(id);
    }

}
