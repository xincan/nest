import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './message.service';
import { Message } from './message.entity';

@Controller('message')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) { }

    @Get('add')
    save(): Promise<Message> {
        return this.messagesService.save();
    }

    @Get('all')
    findAll(): Promise<Message[]> {
        return this.messagesService.findAll();
    }
}
