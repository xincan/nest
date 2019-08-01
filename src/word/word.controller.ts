
import {Controller, Inject, Get} from '@nestjs/common';
import {ResultObject} from '../result/result.object';
import {IWordService} from './word.interface';

/**
 * 文档信息控制层
 */
@Controller('word')
export class WordController {

    /**
     * 注入文档信息接口
     * @param wordOutlineService
     */
    constructor(@Inject('WordService') private readonly wordOutlineService: IWordService) {}

    /**
     * 查询章节目录
     * @param id
     */
    @Get('outline')
    async findByOutline(): Promise<ResultObject> {
        const result = await this.wordOutlineService.findByOutline();
        if (result !== null) {
            return new ResultObject(200, result.length, '查询文档目录成功', result);
        } else {
            return new ResultObject(500, 0, '查询文档目录失败', []);
        }
    }

}
