import { Column, BaseEntity, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

/**
 *  文档实体类
 */
@Entity('word_content')
export class WordContent extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', comment: '文档ID'})
    id: number;

    @Column('varchar', { name: 'content', comment: '文档内容', nullable: true })
    content: string;

    @Column('varchar', { name: 'word_outline_id', comment: '文档章节目录ID', nullable: true })
    wordOutlineId: string;

    @UpdateDateColumn({ name: 'create_time', comment: '编辑时间' })
    createTime: Date;

}

/**
 *  文档章节实体类
 */
@Entity('word_outline')
export class WordOutline extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', comment: '文档章节ID'})
    id: number;

    @Column('varchar', { name: 'num', comment: '文档章节编号', nullable: true })
    num: string;

    @Column('varchar', { name: 'menu', comment: '文档章节标题', nullable: true })
    menu: string;

    @Column('int', { name: 'parent_id', comment: '上级文档章节ID', nullable: true })
    parentId: number;

    @Column('varchar', { name: 'plan_id', comment: '预案ID', nullable: true })
    planId: string;

    @UpdateDateColumn({ name: 'create_time', comment: '编辑时间' })
    createTime: Date;

    label: string;

    children: WordOutline[];

}

/**
 *  预案类型实体类
 */
@Entity('word_resource')
export class WordResource extends BaseEntity {

    @PrimaryGeneratedColumn({name: 'id', comment: '预案ID'})
    id: number;

    @Column('varchar', { name: 'resource', comment: '预案名称', nullable: true })
    resource: string;

    @Column('int', { name: 'word_content_id', comment: '预案类型说明', nullable: true })
    wordContentId: number;

    @UpdateDateColumn({ name: 'create_time', comment: '编辑时间' })
    createTime: Date;
}
