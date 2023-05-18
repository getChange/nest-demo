// 入口文件
import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import * as session from 'express-session'
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 通过NestFactory.create(AppModule)构建一个
  app.enableVersioning({
    type: VersioningType.URI
  }) // 接口版本控制
  app.use(session({
    secret: "luffy", // 生成服务端session 签名
    name: 'didi', // 生成客户端cookie 的名字 默认 connect.sid
    cookie: {
      maxAge: null // null表示长时间存储；maxAge表示最长过期时间。关闭当前页面会消失。
    }, // 设置返回到前端 key 的属性，默认值为{ path: ‘/’, httpOnly: true, secure: false, maxAge: null }。
    rolling: true, // 在每次请求时强行设置 cookie，这将重置 cookie 过期时间(默认:false)
  }))
  await app.listen(3000); // 监听端口
}
bootstrap();
