
export class ResultObject {

    code: number;
    count: number;
    msg: string;
    data: any;

    constructor(code: number, count: number, msg: string, data: any) {
        this.code = code;
        this.count = count;
        this.msg = msg;
        this.data = data;
    }
}
