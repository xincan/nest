import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

/**
 * 生成菜单信息模型
 */
@Module({
    controllers: [MenuController],
    providers: [MenuService],
})
export class MenuModule {}
