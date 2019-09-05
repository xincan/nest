import {Injectable, Logger} from '@nestjs/common';
import {Menu, TreeMenu} from './menu.entity';
import { IMenuService } from './menu.interface';
import {StringUtils} from "../utils/utils.string";
import {TreeUtils} from "../utils/utils.tree";

/**
 * 菜单信息接口实现层
 */
@Injectable()
export class MenuService implements IMenuService {

    /**
     * 添加菜单信息
     * @param user
     */
    async save(menu: Menu): Promise<Menu> {
        return await Menu.save(menu);
    }

    /**
     * 根据菜单ID修改菜单信息
     * @param user
     */
    async update(menu: Menu): Promise<number> {
        return await Menu.update(menu.id, menu).then(result => {
            return 1;
        }).catch( error => {
            Logger.log(error);
            return 0;
        });
    }

    /**
     * 根据ID删除菜单信息
     * @param id
     */
    async delete(id: string): Promise<number> {
        return await Menu.delete(id.split(',')).then( result => {
            return 1;
        }).catch( error => {
            Logger.log(error);
            return 0;
        });
    }

    /**
     * 分页查询菜单信息
     * @param page
     */
    async findPage(page): Promise<[Menu[], number]> {
        const asName = 'm',
            list = Menu.createQueryBuilder(asName);
        if ( page !== null ) {
            if (StringUtils.isNotEmpty(page.menuName)) {
                list.andWhere(asName + '.menu_name=:menuName', {menuName: page.menuName});
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
     * 根据ID查询菜单信息
     * @param id
     */
    async findById(id: number): Promise<Menu> {
        return await Menu.findOne(id);
    }

    /**
     * 查询菜单信息
     */
    async findByMenus(): Promise<Menu[]> {
        let asName = 'm',
            list = await Menu.createQueryBuilder(asName).getMany();
        for(const menu of list) {
            if(StringUtils.isNotUndefined(menu.path) && StringUtils.isNotEmpty(menu.path)){
                menu.code = menu.path.substring(menu.path.lastIndexOf("/") + 1);
            }
        }
        list = TreeUtils.getTree(-1, list);
        return list;

    }


    /**
     * 查询菜单信息(组装vue-treeSelect)
     */
    async findByTreeMenu(): Promise<TreeMenu[]> {
        let asName = 'm',
            list = await Menu.createQueryBuilder(asName).getMany(),
            tmArr = [];
        for(const menu of list) {
            let tm = new TreeMenu();
            tm.id = menu.id;
            tm.label = menu.menuName;
            tm.parentId = menu.parentId;
            tmArr.push(tm);
        }
        return TreeUtils.getTree(-1, tmArr);
    }

}
