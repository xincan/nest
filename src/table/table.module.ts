import { Module } from '@nestjs/common';
import {TableOptionController} from './table.controller';
import { TableOptionService } from './table.service';

@Module({
  controllers: [TableOptionController],
  providers: [TableOptionService],
})
export class TableModule {}
