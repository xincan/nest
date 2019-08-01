/**
 * 通用返回结果封装
 */
export class ResultObject {

    code: number;       // 结果编码
    count: number;      // 结果数据条数
    msg: string;        // 结果信息
    data: any;          // 结果数据类型

    constructor(code: number, count: number, msg: string, data: any) {
        this.code = code;
        this.count = count;
        this.msg = msg;
        this.data = data;
    }
}
