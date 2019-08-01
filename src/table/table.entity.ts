import { Column, BaseEntity, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

/**
 *  用户操作列表实体类
 */
@Entity('table_option')
export class TableOption extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', comment: '主键ID'})
    id: number;

    @Column('varchar', { name: 'name', comment: '记录操作表格名称', nullable: true })
    name: string;

    @Column('json', { name: 'content', comment: '记录表格操作信息', nullable: true })
    content: string;

    @UpdateDateColumn({ name: 'create_time', comment: '创建时间' })
    createTime: Date;

}
