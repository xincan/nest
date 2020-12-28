import {Controller, Get, Inject, Param, Put, Body, Post, Query, Patch, Delete, Logger} from '@nestjs/common';
import {User} from './user.entity';
import {IUserService} from './user.interface';
import {ResultObject} from '../result/result.object';

/**
 * 用户信息控制层
 */
@Controller('/user')
export class UserController {

    /**
     * 注入用户信息接口
     * @param userService
     */
    constructor(@Inject('UserService') private readonly userService: IUserService) {}

    /**
     * 分页查询用户信息
     * @param page 分页对象信息
     */
    @Post('/boot')
    async bootstrap(@Body() page): Promise<ResultObject> {
        const result = await this.userService.bootstrap(page);
        if (result !== null) {
            return new ResultObject(200, result[1], '查询用户成功', result[0]);
        } else {
            return new ResultObject(500, 0, '查询用户失败', null);
        }
    }

    /**
     * 查询用户信息
     */
    @Get('/all')
    async findAll(@Query() param): Promise<ResultObject> {
        Logger.log(param);
        const result = await this.userService.findByUser(param);
        if (result !== null) {
            return new ResultObject(200, result[1], '查询所有用户成功', result[0]);
        } else {
            return new ResultObject(500, 0, '查询所有失败', null);
        }
    }

    /**
     * 增加用户信息
     */
    @Put()
    async save(@Body() user: User): Promise<ResultObject> {
        const result = await this.userService.save(user);
        if (result !== null) {
            return new ResultObject(200, 1, '增加用户成功', result);
        } else {
            return new ResultObject(500, 0, '增加用户失败', null);
        }
    }

    /**
     * 修改用户信息
     */
    @Patch()
    async update(@Body() user: User): Promise<ResultObject> {
        const result = await this.userService.update(user);
        if (result > 0) {
            return new ResultObject(200, 1, '修改用户成功', user);
        } else {
            return new ResultObject(500, 0, '修改用户失败', null);
        }
    }

    /**
     * 分页查询用户信息
     * @param page 分页参数对象
     */
    @Get()
    async findPage(@Query() page): Promise<ResultObject> {
        const result = await this.userService.findPage(page);
        if (result !== null) {
            return new ResultObject(200, result[1], '查询用户成功', result[0]);
        } else {
            return new ResultObject(500, 0, '查询用户失败', null);
        }
    }

    /**
     * 根据用户ID查询用户信息（路径形式）
     * @param id
     */
    @Get(':id')
    async findByUrlId(@Param('id') id: number): Promise<ResultObject> {
        const result = await this.userService.findById(id);
        if (result !== null) {
            return new ResultObject(200, 1, '查询用户成功', result);
        } else {
            return new ResultObject(500, 0, '查询用户失败', null);
        }
    }

}
