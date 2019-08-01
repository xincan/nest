import { Column, BaseEntity, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

/**
 *  预案实体类
 */
@Entity('plan')
export class Plan extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', comment: '预案ID'})
    id: number;

    @Column('varchar', { name: 'plan_name', comment: '预案名称', nullable: true })
    planName: string;

    @Column('varchar', { name: 'version', comment: '预案版本', nullable: true })
    version: string;

    @Column('varchar', { name: 'description', comment: '预案说明', nullable: true })
    description: string;

    @Column('int', { name: 'plan_type_id', comment: '预案类型ID', nullable: true })
    planTypeId: number;

    @Column('int', { name: 'status', comment: '预案编辑状态', nullable: true})
    status: number;

    @UpdateDateColumn({ name: 'create_time', comment: '编辑时间' })
    createTime: Date;

}

/**
 *  预案类型实体类
 */
// tslint:disable-next-line:max-classes-per-file
@Entity('plan_type')
export class PlanType extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', comment: '预案ID'})
    id: number;

    @Column('varchar', { name: 'name', comment: '预案名称', nullable: true })
    name: string;

    @Column('int', { name: 'parent_id', comment: '预案版本', nullable: true })
    parentId: number;

    @Column('varchar', { name: 'description', comment: '预案类型说明', nullable: true })
    description: string;

    @UpdateDateColumn({ name: 'create_time', comment: '编辑时间' })
    createTime: Date;

    label: string;

    children: PlanType[];

}
