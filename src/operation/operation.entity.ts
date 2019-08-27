import { Column, BaseEntity, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

/**
 *  按钮(操作)实体类
 */
@Entity('operation')
export class Operation extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', comment: '操作ID'})
    id: number;

    @Column('varchar', { name: 'operation_name', comment: '按钮名称', nullable: true })
    operationName: string;

    @Column('varchar', { name: 'icon', comment: '按钮图标', nullable: true })
    icon: string;

    @Column('varchar', { name: 'type', comment: '按钮类型(view:页面按钮（包括检索条件按钮，表格头部按钮），table:表格右侧操作列按钮)', nullable: true })
    type: number;

    @Column('smallint', { name: 'sequence', comment: '按钮顺序', nullable: true })
    sequence: number;

    @UpdateDateColumn({ name: 'create_time', comment: '创建时间' })
    createTime: Date;

}
