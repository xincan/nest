import {Menu, TreeMenu} from './menu.entity';

/**
 * 菜单信息接口层
 */
export interface IMenuService {

    /**
     * 保存菜单信息
     * @param user
     */
    save(menu: Menu): Promise<Menu>;

    /**
     * 修改菜单信息
     * @param user
     */
    update(menu: Menu): Promise<number>;

    /**
     * 删除菜单信息
     * @param id
     */
    delete(id: string): Promise<number>;

    /**
     * 根据条件分页查询菜单信息
     * @param page
     */
    findPage(page): Promise<[Menu[], number]>;

    /**
     * 根据ID查询菜单信息
     * @param id
     */
    findById(id: number): Promise<Menu>;

    /**
     * 查询菜单信息
     */
    findByMenus(): Promise<Menu[]>;

    /**
     * 查询菜单信息(组装vue-treeSelect)
     */
    findByTreeMenu(): Promise<TreeMenu[]>;

}
