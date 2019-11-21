/*
Navicat MySQL Data Transfer

Source Server         : 本机-mysql
Source Server Version : 50722
Source Host           : localhost:3306
Source Database       : xincan-nest

Target Server Type    : MYSQL
Target Server Version : 50722
File Encoding         : 65001

Date: 2019-09-06 20:24:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '菜单ID',
  `parent_id` int(11) DEFAULT NULL COMMENT '父级菜单ID',
  `menu_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '菜单名称',
  `icon` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '菜单图标',
  `path` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '菜单对应前端文件路由',
  `params` json DEFAULT NULL COMMENT '路由参数',
  `level` smallint(6) DEFAULT NULL COMMENT '菜单级别',
  `sequence` smallint(6) DEFAULT NULL COMMENT '菜单顺序',
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('1', '-1', '系统管理', 'fa-home', null, '\"{\\\"menu\\\":\\\"系统管理\\\"}\"', '1', '1', '2019-09-03 17:41:21.791379');
INSERT INTO `menu` VALUES ('2', '1', '地区管理', 'fa-globe', '/views/system/manage/AreaManage', '\"{\\\"menu\\\":\\\"地区管理\\\"}\"', '2', '1', '2019-09-03 17:42:16.229384');
INSERT INTO `menu` VALUES ('3', '1', '菜单管理', 'fa-bars', '/views/system/manage/MenuManage', '\"{\\\"menu\\\":\\\"菜单管理\\\"}\"', '2', '2', '2019-09-03 17:45:52.116193');
INSERT INTO `menu` VALUES ('4', '1', '用户管理', 'fa-user-o', '/views/system/manage/UserManage', '\"{\\\"menu\\\":\\\"用户管理\\\"}\"', '2', '3', '2019-09-03 17:45:52.883498');
INSERT INTO `menu` VALUES ('5', '1', '角色管理', 'fa-user-md', '/views/system/manage/RoleManage', '\"{\\\"menu\\\":\\\"角色管理\\\"}\"', '2', '4', '2019-09-03 17:45:53.553439');
INSERT INTO `menu` VALUES ('6', '1', '权限管理', 'fa-home', '/views/system/manage/PermissionManage', '\"{\\\"menu\\\":\\\"权限管理\\\"}\"', '2', '5', '2019-09-03 17:46:14.185463');
INSERT INTO `menu` VALUES ('7', '-1', '预警管理', 'fa-home', null, '\"{\\\"menu\\\":\\\"预警管理\\\"}\"', '1', '2', '2019-09-03 17:46:15.156669');
INSERT INTO `menu` VALUES ('8', '7', '预警编辑', 'fa-globe', '/views/system/warn/WarnManage', '\"{\\\"menu\\\":\\\"预警编辑\\\"}\"', '2', '1', '2019-09-03 17:55:45.870697');
INSERT INTO `menu` VALUES ('9', '-1', '预案管理', 'fa-home', '/views/system/manage/PlanManage', '\"{\\\"menu\\\":\\\"预案管理\\\"}\"', '1', '3', '2019-09-04 18:21:04.601649');
INSERT INTO `menu` VALUES ('13', '1', '操作管理', 'fa-home', '/views/system/manage/OperationManage', '\"{\\\"menu\\\":\\\"操作管理\\\"}\"', '2', '6', '2019-09-06 12:39:34.965944');
INSERT INTO `menu` VALUES ('14', '-1', '拓扑管理', 'fa-home', null, '\"{\\\"menu\\\":\\\"拓扑管理\\\"}\"', '1', '5');
INSERT INTO `menu` VALUES ('15', '14', '拓扑编辑', 'fa-home', '/views/system/topology/TopologyManage', '\"{\\\"menu\\\":\\\"拓扑编辑\\\"}\"', '2', '1');
INSERT INTO `menu` VALUES ('16', '14', '基本图形', 'fa-home', '/views/system/topology/BasicGraphics', '\"{\\\"menu\\\":\\\"基本图形\\\"}\"', '2', '2');
INSERT INTO `menu` VALUES ('17', '14', '图形连线', 'fa-home', '/views/system/topology/LinkGraphics', '\"{\\\"menu\\\":\\\"图形连线\\\"}\"', '2', '3');
INSERT INTO `menu` VALUES ('18', '14', '图片下载', 'fa-home', '/views/system/topology/ImageDownload', '\"{\\\"menu\\\":\\\"图片下载\\\"}\"', '2', '4');
INSERT INTO `menu` VALUES ('19', '14', '页面概念', 'fa-home', '/views/system/topology/PageGraphics', '\"{\\\"menu\\\":\\\"页面概念\\\"}\"', '2', '5');
INSERT INTO `menu` VALUES ('20', '14', '流程图', 'fa-home', '/views/system/topology/ProcessGraphics', '\"{\\\"menu\\\":\\\"流程图\\\"}\"', '2', '6');
INSERT INTO `menu` VALUES ('21', '14', '可视化编辑', 'fa-home', '/views/system/topology/VisualEditGraphics', '\"{\\\"menu\\\":\\\"可视化编辑\\\"}\"', '2', '7');
INSERT INTO `menu` VALUES ('22', '14', 'GdrawApi', 'fa-home', '/views/system/topology/GdrawApi', '\"{\\\"menu\\\":\\\"GdrawApi\\\"}\"', '2', '0');
INSERT INTO `menu` VALUES ('23', '14', '路径显示', 'fa-home', '/views/system/topology/ShowPathGraphics', '\"{\\\"menu\\\":\\\"路径显示\\\"}\"', '2', '8');
INSERT INTO `menu` VALUES ('24', '14', '大屏展示', 'fa-home', '/views/system/topology/ScreenGraphics', '\"{\\\"menu\\\":\\\"大屏展示\\\"}\"', '2', '10');

-- ----------------------------
-- Table structure for operation
-- ----------------------------
DROP TABLE IF EXISTS `operation`;
CREATE TABLE `operation` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '操作ID',
  `operation_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '按钮名称',
  `code` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '按钮编码（用于前端触发按钮调用函数名称）',
  `icon` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '按钮图标',
  `type` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '按钮类型(view:页面按钮（包括检索条件按钮，表格头部按钮），table:表格右侧操作列按钮)',
  `sequence` smallint(6) DEFAULT NULL COMMENT '按钮顺序',
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of operation
-- ----------------------------
INSERT INTO `operation` VALUES ('1', '增加', 'add', 'fa-home', 'view', '1', '2019-09-06 12:48:48.635712');
INSERT INTO `operation` VALUES ('2', '修改', 'update', 'fa-update', 'table', '1', '2019-09-06 12:50:52.968752');
INSERT INTO `operation` VALUES ('3', '删除', 'delete', 'fa-home', 'view', '1', '2019-09-06 15:38:25.542525');
INSERT INTO `operation` VALUES ('4', '上传', 'upload', 'fa-home', 'view', '3', '2019-09-06 16:30:17.260917');
INSERT INTO `operation` VALUES ('5', '下载', 'download', 'fa-home', 'view', '4', '2019-09-06 16:30:39.883451');
INSERT INTO `operation` VALUES ('6', '导入', 'import', 'fa-home', 'view', '5', '2019-09-06 16:30:56.140745');
INSERT INTO `operation` VALUES ('7', '导出', 'export', 'fa-home', 'view', '6', '2019-09-06 16:31:15.712456');
INSERT INTO `operation` VALUES ('8', '查看', 'detail', 'fa-home', 'table', '2', '2019-09-06 17:04:58.966620');
INSERT INTO `operation` VALUES ('9', '验证', 'validate', 'fa-home', 'table', '3', '2019-09-06 17:05:21.336682');
INSERT INTO `operation` VALUES ('10', '提交', 'summit', 'fa-home', 'table', '4', '2019-09-06 17:05:38.779680');
INSERT INTO `operation` VALUES ('11', '撤回', 'recall', 'fa-home', 'table', '5', '2019-09-06 17:05:58.533357');
INSERT INTO `operation` VALUES ('12', '审批', 'approval', 'fa-home', 'table', '6', '2019-09-06 17:06:14.202359');
INSERT INTO `operation` VALUES ('13', '变更', 'modify', 'fa-home', 'table', '7', '2019-09-06 17:06:27.013354');
INSERT INTO `operation` VALUES ('14', '生成', 'generate', 'fa-home', 'table', '8', '2019-09-06 17:07:39.000000');
INSERT INTO `operation` VALUES ('15', '发布', 'publish', 'fa-home', 'table', '9', '2019-09-06 17:08:27.913720');
INSERT INTO `operation` VALUES ('16', '启用', 'start', 'fa-home', 'table', '10', '2019-09-06 17:08:45.092553');
INSERT INTO `operation` VALUES ('17', '停用', 'stop', 'fa-home', 'table', '11', '2019-09-06 17:09:02.207449');

-- ----------------------------
-- Table structure for permission
-- ----------------------------
DROP TABLE IF EXISTS `permission`;
CREATE TABLE `permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '权限ID',
  `menu_id` int(11) DEFAULT NULL COMMENT '菜单ID',
  `operations` json DEFAULT NULL COMMENT '当前菜单对应的操作集合',
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of permission
-- ----------------------------

-- ----------------------------
-- Table structure for plan
-- ----------------------------
DROP TABLE IF EXISTS `plan`;
CREATE TABLE `plan` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '预案ID',
  `plan_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '预案名称',
  `version` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '预案版本',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '预案说明',
  `plan_type_id` int(11) DEFAULT NULL COMMENT '预案类型ID',
  `status` int(11) DEFAULT NULL COMMENT '预案编辑状态',
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '编辑时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of plan
-- ----------------------------
INSERT INTO `plan` VALUES ('1', '测试', '1.0.0', '测试', '4', '1', '2019-05-30 20:15:06.000000');

-- ----------------------------
-- Table structure for plan_type
-- ----------------------------
DROP TABLE IF EXISTS `plan_type`;
CREATE TABLE `plan_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '预案ID',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '预案名称',
  `parent_id` int(11) DEFAULT NULL COMMENT '预案版本',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '预案类型说明',
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '编辑时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of plan_type
-- ----------------------------
INSERT INTO `plan_type` VALUES ('1', '预案大类', '0', 'BIG_TYPE', '2019-08-01 14:26:44.000000');
INSERT INTO `plan_type` VALUES ('2', '预案子类', '1', 'SMALL_TYPE', '2019-08-01 14:26:44.000000');
INSERT INTO `plan_type` VALUES ('3', '应急相应预案', '2', 'YINGJI', '2019-08-01 14:26:45.000000');
INSERT INTO `plan_type` VALUES ('4', '灾难恢复预案', '2', 'ZAINAN', '2019-08-01 14:26:45.000000');
INSERT INTO `plan_type` VALUES ('5', '后勤保障预案', '2', 'HOUQIN', '2019-08-01 14:26:45.000000');
INSERT INTO `plan_type` VALUES ('6', '业务恢复预案', '2', 'YEWU', '2019-08-01 14:26:45.000000');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `role_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '角色名称',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '角色说明',
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of role
-- ----------------------------

-- ----------------------------
-- Table structure for role_permission
-- ----------------------------
DROP TABLE IF EXISTS `role_permission`;
CREATE TABLE `role_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色分配权限ID',
  `role_id` int(11) DEFAULT NULL COMMENT '角色ID',
  `permissions` json DEFAULT NULL COMMENT '角色分配权限集合',
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of role_permission
-- ----------------------------

-- ----------------------------
-- Table structure for table_option
-- ----------------------------
DROP TABLE IF EXISTS `table_option`;
CREATE TABLE `table_option` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '记录操作表格名称',
  `content` json DEFAULT NULL COMMENT '记录表格操作信息',
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of table_option
-- ----------------------------
INSERT INTO `table_option` VALUES ('38', 'admin-menu-table', '\"[{\\\"prop\\\":\\\"menuName\\\",\\\"width\\\":\\\"auto\\\",\\\"isHide\\\":true},{\\\"prop\\\":\\\"icon\\\",\\\"width\\\":\\\"auto\\\",\\\"isHide\\\":true},{\\\"prop\\\":\\\"path\\\",\\\"width\\\":250,\\\"isHide\\\":true},{\\\"prop\\\":\\\"params\\\",\\\"width\\\":201,\\\"isHide\\\":true},{\\\"prop\\\":\\\"level\\\",\\\"width\\\":218,\\\"isHide\\\":true},{\\\"prop\\\":\\\"sequence\\\",\\\"width\\\":\\\"auto\\\",\\\"isHide\\\":true},{\\\"prop\\\":\\\"createTime\\\",\\\"width\\\":\\\"auto\\\",\\\"isHide\\\":true}]\"', '2019-09-04 16:04:07.923661');
INSERT INTO `table_option` VALUES ('42', 'admin-operation-table', '\"[{\\\"prop\\\":\\\"operationName\\\",\\\"width\\\":157,\\\"isHide\\\":true},{\\\"prop\\\":\\\"code\\\",\\\"width\\\":\\\"auto\\\",\\\"isHide\\\":true},{\\\"prop\\\":\\\"icon\\\",\\\"width\\\":\\\"auto\\\",\\\"isHide\\\":true},{\\\"prop\\\":\\\"type\\\",\\\"width\\\":\\\"auto\\\",\\\"isHide\\\":true},{\\\"prop\\\":\\\"sequence\\\",\\\"width\\\":\\\"auto\\\",\\\"isHide\\\":true},{\\\"prop\\\":\\\"createTime\\\",\\\"width\\\":\\\"auto\\\",\\\"isHide\\\":true}]\"', '2019-09-06 20:21:27.314337');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `login_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户登录名称',
  `login_password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户登录密码',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户姓名',
  `sex` int(11) DEFAULT NULL COMMENT '用户性别',
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户电话号码',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户邮箱',
  `is_admin` int(11) DEFAULT NULL COMMENT '是否是管理员',
  `area_id` int(11) DEFAULT NULL COMMENT '关联地区ID',
  `organization_id` int(11) DEFAULT NULL COMMENT '关联机构ID',
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'jxc', '111111', '百里长风', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('2', 'ceshi', '111111', '测试2', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('3', 'ceshi', '111111', '测试3', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('4', 'ceshi', '111111', '测试4', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('5', 'ceshi', '111111', '测试5', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('6', 'ceshi', '111111', '测试6', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('7', 'ceshi', '111111', '测试7', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('8', 'ceshi', '111111', '测试8', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('9', 'ceshi', '111111', '测试9', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('10', 'ceshi', '111111', '测试10', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('11', 'ceshi', '111111', '测试11', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('12', 'ceshi', '111111', '测试12', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('13', 'ceshi', '111111', '测试13', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('14', 'ceshi', '111111', '测试14', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('15', 'ceshi', '111111', '测试15', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('16', 'ceshi', '111111', '测试16', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('17', 'ceshi', '111111', '测试17', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('18', 'ceshi', '111111', '测试18', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('19', 'ceshi', '111111', '测试1', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('20', 'ceshi', '111111', '测试1', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('21', 'ceshi', '111111', '测试2', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('22', 'ceshi', '111111', '测试3', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('23', 'ceshi', '111111', '测试4', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('24', 'ceshi', '111111', '测试5', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('25', 'ceshi', '111111', '测试6', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('26', 'ceshi', '111111', '测试7', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('27', 'ceshi', '111111', '测试8', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('28', 'ceshi', '111111', '测试9', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('29', 'ceshi', '111111', '测试10', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('30', 'ceshi', '111111', '测试11', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('31', 'ceshi', '111111', '测试12', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('32', 'ceshi', '111111', '测试13', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('33', 'ceshi', '111111', '测试14', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('34', 'ceshi', '111111', '测试15', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('35', 'ceshi', '111111', '测试16', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('36', 'ceshi', '111111', '测试17', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('37', 'ceshi', '111111', '测试18', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('38', 'ceshi', '111111', '测试1', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('39', 'ceshi', '111111', '测试2', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('40', 'ceshi', '111111', '测试3', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('41', 'ceshi', '111111', '测试4', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('42', 'ceshi', '111111', '测试5', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('43', 'ceshi', '111111', '测试6', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('44', 'ceshi', '111111', '测试7', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('45', 'ceshi', '111111', '测试8', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('46', 'ceshi', '111111', '测试9', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('47', 'ceshi', '111111', '测试10', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('48', 'ceshi', '111111', '测试11', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('49', 'ceshi', '111111', '测试12', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('50', 'ceshi', '111111', '测试13', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('61', 'ceshi', '111111', '测试6', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('62', 'ceshi', '111111', '测试7', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('63', 'ceshi', '111111', '测试8', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('64', 'ceshi', '111111', '测试9', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('65', 'ceshi', '111111', '测试10', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('66', 'ceshi', '111111', '测试11', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('67', 'ceshi', '111111', '测试12', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('68', 'ceshi', '111111', '测试13', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('69', 'ceshi', '111111', '测试14', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('70', 'ceshi', '111111', '测试15', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('71', 'ceshi', '111111', '测试16', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('72', 'ceshi', '111111', '测试17', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('73', 'ceshi', '111111', '测试18', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('74', 'ceshi', '111111', '测试1', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('75', 'ceshi', '111111', '测试2', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('76', 'ceshi', '111111', '测试3', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('77', 'ceshi', '111111', '测试4', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('78', 'ceshi', '111111', '测试5', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('79', 'ceshi', '111111', '测试6', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('80', 'ceshi', '111111', '测试7', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('81', 'ceshi', '111111', '测试8', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('82', 'ceshi', '111111', '测试9', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('83', 'ceshi', '111111', '测试10', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('84', 'ceshi', '111111', '测试11', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('85', 'ceshi', '111111', '测试12', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('86', 'ceshi', '111111', '测试13', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('87', 'ceshi', '111111', '测试14', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('88', 'ceshi', '111111', '测试15', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('89', 'ceshi', '111111', '测试16', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('90', 'ceshi', '111111', '测试17', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('91', 'ceshi', '111111', '测试18', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('92', 'ceshi', '111111', '测试1', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('93', 'ceshi', '111111', '测试2', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('94', 'ceshi', '111111', '测试3', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('95', 'ceshi', '111111', '测试4', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('96', 'ceshi', '111111', '测试5', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('97', 'ceshi', '111111', '测试6', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('98', 'ceshi', '111111', '测试7', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('99', 'ceshi', '111111', '测试8', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('100', 'ceshi', '111111', '测试9', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('101', 'ceshi', '111111', '测试10', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('102', 'ceshi', '111111', '测试11', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('103', 'ceshi', '111111', '测试12', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('104', 'ceshi', '111111', '测试13', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('105', 'ceshi', '111111', '测试14', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('106', 'ceshi', '111111', '测试15', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('107', 'ceshi', '111111', '测试16', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('108', 'ceshi', '111111', '测试17', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('109', 'ceshi', '111111', '测试18', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('110', 'ceshi', '111111', '测试1', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('111', 'ceshi', '111111', '测试2', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('112', 'ceshi', '111111', '测试3', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('113', 'ceshi', '111111', '测试4', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('114', 'ceshi', '111111', '测试5', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('115', 'ceshi', '111111', '测试6', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('116', 'ceshi', '111111', '测试7', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('117', 'ceshi', '111111', '测试8', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('118', 'ceshi', '111111', '测试9', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('119', 'ceshi', '111111', '测试10', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('120', 'ceshi', '111111', '测试11', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('121', 'ceshi', '111111', '测试12', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('122', 'ceshi', '111111', '测试13', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('123', 'ceshi', '111111', '测试14', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('124', 'ceshi', '111111', '测试15', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('125', 'ceshi', '111111', '测试16', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('126', 'ceshi', '111111', '测试17', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');
INSERT INTO `user` VALUES ('127', 'ceshi', '111111', '测试18', '1', '18501377889', 'asdf@ads.com', '0', '111', '111', '2019-07-31 09:31:12.222101');

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户角色ID',
  `user_id` int(11) DEFAULT NULL COMMENT '用户ID',
  `roles` json DEFAULT NULL COMMENT '用户分配角色集合',
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of user_role
-- ----------------------------

-- ----------------------------
-- Table structure for word_content
-- ----------------------------
DROP TABLE IF EXISTS `word_content`;
CREATE TABLE `word_content` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '文档ID',
  `content` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文档内容',
  `word_outline_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文档章节目录ID',
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '编辑时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of word_content
-- ----------------------------

-- ----------------------------
-- Table structure for word_outline
-- ----------------------------
DROP TABLE IF EXISTS `word_outline`;
CREATE TABLE `word_outline` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '文档章节ID',
  `num` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文档章节编号',
  `menu` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文档章节标题',
  `parent_id` int(11) DEFAULT NULL COMMENT '上级文档章节ID',
  `plan_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '预案ID',
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '编辑时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of word_outline
-- ----------------------------
INSERT INTO `word_outline` VALUES ('1', '', '封面', '0', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('2', '', '目录', '0', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('3', '第一章', '概述', '0', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('4', '1.1.', '计划简述', '3', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('5', '1.2.', '试用范围', '3', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('6', '1.3.', '基本原则', '3', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('7', '第二章', '组织架构', '0', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('8', '第三章', '业务恢复级别', '0', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('9', '（一）', '优先恢复级别业务', '8', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('10', '（二）', '次优先恢复级别业务', '8', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('11', '（三）', '一般恢复级别业务', '8', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('12', '第四章', '重要业务运营所需关键资源', '0', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('13', '第五章', '应急指挥与危机沟通', '0', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('14', '第六章', '预案体系及管理维护', '0', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('15', '第七章', '演练', '0', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('16', '第八章', '剩余风险', '0', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('17', '第九章', '日常培训', '0', '1', '2019-08-01 15:04:00.000000');
INSERT INTO `word_outline` VALUES ('18', '第十章', '持续改进', '0', '1', '2019-08-01 15:04:01.000000');

-- ----------------------------
-- Table structure for word_resource
-- ----------------------------
DROP TABLE IF EXISTS `word_resource`;
CREATE TABLE `word_resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '预案ID',
  `resource` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '预案名称',
  `word_content_id` int(11) DEFAULT NULL COMMENT '预案类型说明',
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '编辑时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of word_resource
-- ----------------------------
SET FOREIGN_KEY_CHECKS=1;
