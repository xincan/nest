import { Module } from '@nestjs/common';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';

/**
 * 生成权限信息模型
 */
@Module({
    controllers: [PermissionController],
    providers: [PermissionService],
})
export class PermissionModule {}
