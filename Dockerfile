# 引用镜像
FROM xincan/nestjs:1.0.0
# 作者
MAINTAINER xincan
# 执行命令，创建文件夹
ADD ./src /workspace/src
COPY ./.prettierrc ./*.json /workspace/
# 执行镜像的工作目录
WORKDIR /workspace
# 配置系统变量，指定端口
ENV HOST 0.0.0.0
ENV PORT 3000
# 开放端口
EXPOSE 3000
# 容器启动命令
ENTRYPOINT npm install && npm run start
