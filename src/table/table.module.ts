import { Module } from '@nestjs/common';
import {TableOptionController} from './table.controller';
import { TableOptionService } from './table.service';

/**
 * 生成用户操作列表模型
 */
@Module({
  controllers: [TableOptionController],
  providers: [TableOptionService],
})
export class TableModule {}
