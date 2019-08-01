import { Module } from '@nestjs/common';
import { WordController } from './word.controller';
import { WordService } from './word.service';

/**
 * 生成文档模型
 */
@Module({
    controllers: [WordController],
    providers: [WordService],
})
export class WordModule {}
