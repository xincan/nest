import {WordOutline} from './word.entity';
import {IWordService} from './word.interface';
import {Injectable} from '@nestjs/common';

/**
 * 文档信息接口实现层
 */
@Injectable()
export class WordService implements IWordService {

    /**
     * 递归组装tree数据
     * @param id
     * @param result
     */
    getTree = (id: number, result: WordOutline[]) => {
        const items = [];
        for (const rlt of result) {
            // 遍历所有节点，将父菜单id与传过来的id比较
            if (rlt.parentId === id) {
                rlt.label = rlt.num + '  ' + rlt.menu;
                delete rlt.menu;
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
     * 查询章节目录
     */
    async findByOutline(): Promise<WordOutline[]> {
        const result = await WordOutline.createQueryBuilder('wo').select().getMany();
        if (result !== null && result.length > 0) {
            return this.getTree(0, result);
        }
        return null;
    }

}
