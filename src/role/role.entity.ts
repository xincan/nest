import { Column, BaseEntity, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

/**
 *  角色实体类
 */
@Entity('role')
export class Role extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', comment: '角色ID'})
    id: number;

    @Column('varchar', { name: 'role_name', comment: '角色名称', nullable: true })
    roleName: string;

    @Column('varchar', { name: 'description', comment: '角色说明', nullable: true })
    description: String;

    @UpdateDateColumn({ name: 'create_time', comment: '创建时间' })
    createTime: Date;

}


/**
 *  角色权限实体类
 */
@Entity('role_permission')
export class RolePermission extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', comment: '角色分配权限ID'})
    id: number;

    @Column('int', { name: 'role_id', comment: '角色ID', nullable: true })
    roleId: number;

    @Column('json', { name: 'permissions', comment: '角色分配权限集合', nullable: true })
    permissions: any;

    @UpdateDateColumn({ name: 'create_time', comment: '创建时间' })
    createTime: Date;

}
