import { Column, BaseEntity, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

/**
 *  按钮(操作)实体类
 */
@Entity('operation')
export class Operation extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', comment: '操作ID'})
    id: number;

    @Column('varchar', { name: 'operation_name', comment: '按钮名称', nullable: true, length: 50 })
    operationName: string;

    @Column('varchar', { name: 'code', comment: '按钮编码（用于前端触发按钮调用函数名称）', nullable: false, length: 50 })
    code: string;

    @Column('varchar', { name: 'icon', comment: '按钮图标', nullable: true ,length: 50})
    icon: string;

    @Column('varchar',
        { name: 'type', comment: '按钮类型(view:页面按钮（包括检索条件按钮，表格头部按钮），table:表格右侧操作列按钮)', nullable: true ,length: 50 }
    )
    type: number;

    @Column('smallint', { name: 'sequence', comment: '按钮顺序', nullable: true })
    sequence: number;

    @UpdateDateColumn({ name: 'create_time', comment: '创建时间' })
    createTime: Date;

}
