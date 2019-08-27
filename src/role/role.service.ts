import {Injectable, Logger} from '@nestjs/common';
import {Role} from './role.entity';
import { IRoleService } from './role.interface';
import {StringUtils} from "../utils/utils.string";

/**
 * 角色信息接口实现层
 */
@Injectable()
export class RoleService implements IRoleService {

    /**
     * 添加角色信息
     * @param user
     */
    async save(role: Role): Promise<Role> {
        return await Role.save(role);
    }

    /**
     * 根据菜单ID修改角色信息
     * @param user
     */
    async update(permission: Role): Promise<number> {
        return await Role.update(permission.id, permission).then(result => {
            return 1;
        }).catch( error => {
            Logger.log(error);
            return 0;
        });
    }

    /**
     * 根据ID删除角色信息
     * @param id
     */
    async delete(id: string): Promise<number> {
        return await Role.delete(id.split(',')).then( result => {
            return 1;
        }).catch( error => {
            Logger.log(error);
            return 0;
        });
    }

    /**
     * 分页查询角色信息
     * @param page
     */
    async findPage(page): Promise<[Role[], number]> {
        const asName = 'r',
            list = Role.createQueryBuilder(asName);
        if ( page !== null ) {
            if (StringUtils.isNotEmpty(page.roleName)) {
                list.andWhere(asName + '.role_name=:roleName', {roleName: page.roleName});
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
     * 根据角色ID查询角色信息
     * @param id
     */
    async findById(id: number): Promise<Role> {
        return await Role.findOne(id);
    }

}
