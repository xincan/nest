import { Module } from '@nestjs/common';
import { PlanController } from './plan.controller';
import { PlanService } from './plan.service';

/**
 * 生成预案模型
 */
@Module({
    controllers: [PlanController],
    providers: [PlanService],
})
export class PlanModule {}
