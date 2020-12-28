import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from './user/user.module';
import {TableModule} from './table/table.module';
import {PlanModule} from './plan/plan.module';
import {WordModule} from './word/word.module';
import {MenuModule} from "./menu/menu.module";
import {RoleModule} from "./role/role.module";
import {PermissionModule} from "./permission/permission.module";
import {OperationModule} from "./operation/operation.module";

/**
 * 创建数据库连接
 */
const Connection = TypeOrmModule.forRoot({
  type: 'mysql',
  host: '192.168.1.19',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'xincan-nest',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  timezone: 'MT',
});

@Module({
  imports: [
      Connection,           // 数据库连接配置
      TableModule,          // 表格显隐列、排序操作配置
      UserModule,           // 用户管理配置
      RoleModule,           // 角色管理配置
      PermissionModule,     // 权限管理配置
      MenuModule,           // 菜单管理配置
      OperationModule,      // 操作管理配置
      PlanModule,           // 预案计划配置
      WordModule,           // 文档管理配置
  ],
})
export class AppModule {}
