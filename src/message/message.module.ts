import { Module } from '@nestjs/common';
import { MessagesService } from './message.service';
import { MessagesController } from './message.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Message])],
    providers: [MessagesService],
    controllers: [MessagesController],
})
export class MessagesModule {}
