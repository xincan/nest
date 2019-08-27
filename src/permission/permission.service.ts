import {Injectable, Logger} from '@nestjs/common';
import {Permission} from './permission.entity';
import { IPermissionService } from './permission.interface';
import {StringUtils} from "../utils/utils.string";

/**
 * 权限信息接口实现层
 */
@Injectable()
export class PermissionService implements IPermissionService {

    /**
     * 添加权限信息
     * @param user
     */
    async save(permission: Permission): Promise<Permission> {
        return await Permission.save(permission);
    }

    /**
     * 根据菜单ID修改权限信息
     * @param user
     */
    async update(permission: Permission): Promise<number> {
        return await Permission.update(permission.id, permission).then(result => {
            return 1;
        }).catch( error => {
            Logger.log(error);
            return 0;
        });
    }

    /**
     * 根据ID删除权限信息
     * @param id
     */
    async delete(id: string): Promise<number> {
        return await Permission.delete(id.split(',')).then( result => {
            return 1;
        }).catch( error => {
            Logger.log(error);
            return 0;
        });
    }

    /**
     * 分页查询权限信息
     * @param page
     */
    async findPage(page): Promise<[Permission[], number]> {
        const asName = 'perm',
            list = Permission.createQueryBuilder(asName);
        if ( page !== null ) {
            if (StringUtils.isNotEmpty(page.menuId)) {
                list.andWhere(asName + '.menu_id=:menuId', {menuId: page.menuId});
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
     * 根据ID查询权限信息
     * @param id
     */
    async findById(id: number): Promise<Permission> {
        return await Permission.findOne(id);
    }

}
