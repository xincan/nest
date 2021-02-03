import { Column, BaseEntity, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

/**
 *  菜单实体类
 */
@Entity('menu')
export class Menu extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', comment: '菜单ID'})
    id: number;

    @Column('int', { name: 'parent_id', comment: '父级菜单ID', nullable: true })
    parentId: number;

    @Column('varchar', { name: 'menu_name', comment: '菜单名称', nullable: true, length: 50 })
    menuName: string;

    @Column('varchar', { name: 'icon', comment: '菜单图标', nullable: true, length: 50 })
    icon: string;

    @Column('varchar', { name: 'path', comment: '菜单对应前端文件路由', nullable: true, length: 100 })
    path: string;

    @Column('json', { name: 'params', comment: '路由参数', nullable: true })
    params: string;

    @Column('smallint', { name: 'level', comment: '菜单级别', nullable: true })
    level: number;

    @Column('smallint', { name: 'sequence', comment: '菜单顺序', nullable: true })
    sequence: number;

    @Column('smallint', { name: 'app_id', comment: '应用ID', nullable: true })
    appId: number;

    @UpdateDateColumn({ name: 'create_time', comment: '创建时间' })
    createTime: Date;

    code: string;

    constructor() {
        super();
        this.params = null;
        this.code = null;
    }

}

/**
 *  菜单配置操作实体类
 */
@Entity('menu_operation')
export class MenuOperation extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', comment: '菜单ID'})
    id: number;

    @Column('int', { name: 'parent_id', comment: '上级ID', nullable: true })
    parentId: number;

    @Column('int', { name: 'menu_operation_id', comment: '菜单(操作)名称', nullable: true })
    menuOperationId: number;

    @Column('varchar', { name: 'menu_operation_name', comment: '菜单(操作)名称', nullable: true, length: 50 })
    menuOperationName: string;

    @Column('varchar', { name: 'type', comment: '类型：menu(菜单)、button(按钮)', nullable: true })
    type: string;

    @UpdateDateColumn({ name: 'create_time', comment: '创建时间' })
    createTime: Date;

    constructor() {
        super();
    }

}


/**
 *  菜单实体类(树状结构，构建vue-treeSelect下拉)
 */
export class TreeMenu {

    id: number;

    label: string;

    parentId: number;

}
