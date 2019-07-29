import { Column, BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int', { name: 'user_id' })
    userId: number;

    @Column('text', { name: 'content' })
    content: string;

    @Column('int', { name: 'to_user_id' })
    toUserId: number;

    @Column('datetime', { name: 'created_time' })
    createdTime: Date;
}
