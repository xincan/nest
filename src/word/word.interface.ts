import {WordOutline} from './word.entity';

/**
 * 文档信息接口层
 */
export interface IWordService {

    /**
     * 查询文档章节目录
     */
    findByOutline(): Promise<WordOutline[]>;

}
