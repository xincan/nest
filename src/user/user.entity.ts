import { Column, BaseEntity, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

/**
 *  用户实体类
 */
@Entity('user')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', comment: '用户ID'})
    id: number;

    @Column('varchar', { name: 'login_name', comment: '用户登录名称', nullable: true })
    loginName: string;

    @Column('varchar', { name: 'login_password', comment: '用户登录密码', nullable: true })
    loginPassword: string;

    @Column('varchar', { name: 'name', comment: '用户姓名', nullable: true })
    name: string;

    @Column('int', { name: 'sex', comment: '用户性别', nullable: true })
    sex: number;

    @Column('varchar', { name: 'phone', comment: '用户电话号码', nullable: true })
    phone: string;

    @Column('varchar', { name: 'email', comment: '用户邮箱', nullable: true})
    email: string;

    @Column('int', { name: 'is_admin', comment: '是否是管理员', nullable: true })
    isAdmin: number;

    @Column('int', { name: 'area_id', comment: '关联地区ID', nullable: true })
    areaId: number;

    @Column('int', { name: 'organization_id', comment: '关联机构ID', nullable: true })
    organizationId: number;

    @UpdateDateColumn({ name: 'create_time', comment: '创建时间' })
    createTime: Date;

}
