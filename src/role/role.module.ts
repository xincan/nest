import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

/**
 * 生成权限信息模型
 */
@Module({
    controllers: [RoleController],
    providers: [RoleService],
})
export class RoleModule {}
