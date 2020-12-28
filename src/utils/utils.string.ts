/**
 * 字符串工具类
 */
export class StringUtils {

    /**
     * 判断属性是否存在， true表示不存在，false表示存在
     * @param str
     * @return boolean
     */
    static isUndefined(str: string) {
        return str === undefined;

    }

    /**
     * 判断属性是否存在， true表示存在，false表示不存在
     * @param str
     * @return boolean
     */
    static isNotUndefined(str: string) {
        return str !== undefined;

    }

    /**
     * 属性存在的情况下，判断字符串是否为空， true表示不为空，false表示为空
     * @param str
     * @return boolean
     */
    static isNotEmpty(str: string) {
        return str !== undefined && str !== null && str.length > 0;

    }

    /**
     * 属性存在的情况下，判断字符串是否为空， true表示为空，false表示不为空
     * @param str
     * @return boolean
     */
    static isEmpty(str: string) {
        return str !== undefined && (str === null || str === '' || str.length > 0);

    }

}
