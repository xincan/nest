import { Module } from '@nestjs/common';
import { OperationController } from './operation.controller';
import { OperationService } from './operation.service';

/**
 * 生成操作信息模型
 */
@Module({
    controllers: [OperationController],
    providers: [OperationService],
})
export class OperationModule {}
