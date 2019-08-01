import {Plan, PlanType} from './plan.entity';

/**
 * 预案计划接口层
 */
export interface IPlanService {

    /**
     * 查询预案类型
     */
    findByPlanType(): Promise<PlanType[]>;

    /**
     * 根据条件查询预案信息列表
     * @param page
     */
    findPage(page): Promise<[Plan[], number]>;

}
