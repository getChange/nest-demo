// 入口文件

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 通过NestFactory.create(AppModule)构建一个
  await app.listen(3000); // 监听端口
}
bootstrap();
