
import { Controller, Inject, Body, Put, Patch, Post, Get, Logger, Query } from '@nestjs/common';

import {ResultObject} from '../result/result.object';
import {IPlanService} from './plan.interface';

/**
 * 预案信息处理控制层
 */
@Controller('plan')
export class PlanController {
    constructor(@Inject('PlanService') private readonly planService: IPlanService) {}

    /**
     * 根据条件查询预案信息
     * @param id
     */
    @Get('type')
    async findByPlanType(): Promise<ResultObject> {
        const result = await this.planService.findByPlanType();
        if (result !== null) {
            return new ResultObject(200, result.length, '查询预案成功', result);
        } else {
            return new ResultObject(500, 0, '查询预案失败', []);
        }
    }

    /**
     * 根据条件查询预案信息
     * @param id
     */
    @Get()
    async findPage(@Query() page): Promise<ResultObject> {
        const result = await this.planService.findPage(page);
        if (result !== null) {
            return new ResultObject(200, result[1], '查询预案成功', result[0]);
        } else {
            return new ResultObject(500, 0, '查询预案失败', []);
        }
    }

}
