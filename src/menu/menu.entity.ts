import { Column, BaseEntity, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

/**
 *  菜单实体类
 */
@Entity('menu')
export class Menu extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', comment: '菜单ID'})
    id: number;

    @Column('int', { name: 'parent_id', comment: '父级菜单名称', nullable: true })
    parentId: number;

    @Column('varchar', { name: 'menu_name', comment: '菜单名称', nullable: true })
    menuName: string;

    @Column('varchar', { name: 'code', comment: '菜单对应前端文件路由', nullable: true })
    router: string;

    @Column('varchar', { name: 'icon', comment: '菜单图标', nullable: true })
    icon: string;

    @Column('smallint', { name: 'level', comment: '菜单级别', nullable: true })
    level: number;

    @Column('smallint', { name: 'sequence', comment: '菜单顺序', nullable: true })
    sequence: number;

    @UpdateDateColumn({ name: 'create_time', comment: '创建时间' })
    createTime: Date;

}
