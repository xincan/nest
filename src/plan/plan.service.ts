import {Plan, PlanType} from './plan.entity';
import {IPlanService} from './plan.interface';
import {Logger, Injectable} from '@nestjs/common';

/**
 * 预案计划接口实现层
 */
@Injectable()
export class PlanService implements IPlanService {

    /**
     * 递归处理预案类型生成tree数据
     * @param id
     * @param result
     */
    getTree = (id, result: PlanType[]) => {
        const items = [];
        for (const rlt of result) {
            // 遍历所有节点，将父菜单id与传过来的id比较
            if (rlt.parentId === id) {
                rlt.label = rlt.name;
                delete rlt.name;
                items.push(rlt);
                if (items.length !== 0) {
                    const tree = this.getTree(rlt.id, result);
                    if (tree.length > 0) {
                        rlt.children = tree;
                    }
                }
            }
        }
        return items;
    }

    /**
     * 查询预案类型
     */
    async findByPlanType(): Promise<PlanType[]> {
        const result = await PlanType.createQueryBuilder('pt').select().getMany();
        if (result !== null && result.length > 0) {
            return  this.getTree(0, result);
        }
        return null;
    }

    /**
     * 分页查询预案信息
     * @param page
     */
    async findPage(page): Promise<[Plan[], number]> {
        const list = Plan.createQueryBuilder('p');

        if ( page !== null ) {
            list.skip((page.page - 1) * page.size);
            list.take(page.size);
            list.orderBy('p.' + page.sortName.replace(/([A-Z])/g, '_$1').toLowerCase(), page.sortType);
            return list.getManyAndCount();
        }
        return null;
    }

}
