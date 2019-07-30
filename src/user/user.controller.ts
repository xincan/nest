import {Controller, Get, Inject, Param, HttpStatus, ParseIntPipe, Put, Body, Post, Query, Patch, Delete} from '@nestjs/common';
import {User} from './user.entity';
import {IUserService} from './user.interface';

@Controller('/user')
export class UserController {

    constructor(@Inject('UserService') private readonly userService: IUserService) {}

    /**
     * 增加用户信息
     */
    @Put()
    async save(@Body() user: User): Promise<User> {

        return await this.userService.save(user);
    }

    /**
     * 修改用户信息
     */
    @Patch()
    async update(@Body() user: User): Promise<number> {

        return await this.userService.update(user);
    }

    /**
     * 修改用户信息
     */
    @Delete()
    async delete(@Query() id: number): Promise<User> {

        return await this.userService.delete(id);
    }

    /**
     * 分页查询用户信息
     * @param params
     */
    @Get()
    async findPage(@Query() page): Promise<User[]> {
        return await this.userService.findPage(page);
    }

    /**
     * 根据用户ID查询用户信息（路径形式）
     * @param id
     */
    @Get(':id')
    async findByUrlId(@Param('id') id: number): Promise<User> {
        return await this.userService.findById(id);
    }

}
