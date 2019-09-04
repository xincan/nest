
export class TreeUtils {

    /**
     * 递归处理预案类型生成tree数据
     * @param id
     * @param result
     */
   static getTree(id, result: any[]): any {
        const items = [];
        for (const obj of result) {
            // 遍历所有节点，将父菜单id与传过来的id比较
            if (obj.parentId === id) {
                items.push(obj);
                if (items.length !== 0) {
                    const tree = this.getTree(obj.id, result);
                    if (tree.length > 0) {
                        obj.children = tree;
                    }
                }
            }
        }
        return items;
    }

}
