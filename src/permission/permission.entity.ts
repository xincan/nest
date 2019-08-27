import { Column, BaseEntity, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

/**
 *  权限实体类
 */
@Entity('permission')
export class Permission extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', comment: '权限ID'})
    id: number;

    @Column('int', { name: 'menu_id', comment: '菜单ID', nullable: true })
    menuId: number;

    @Column('json', { name: 'operations', comment: '当前菜单对应的操作集合', nullable: true })
    operations: any;

    @UpdateDateColumn({ name: 'create_time', comment: '创建时间' })
    createTime: Date;

}
