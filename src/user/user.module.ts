import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

/**
 * 生成用户信息模型
 */
@Module({
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
