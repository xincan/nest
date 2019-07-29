
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './message.entity';

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Message)
        private readonly messagesRepository: Repository<Message>,
    ) { }

    async save(): Promise<Message> {
        const message = new Message();
        message.userId = Math.round(Math.random() * 1000);
        message.toUserId = Math.round(Math.random() * 1000);
        message.content = '消息内容';
        message.createdTime = new Date();
        return await message.save();
    }

    async findAll(): Promise<Message[]> {
        return await this.messagesRepository.find();
    }
}
