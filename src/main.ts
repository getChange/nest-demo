// 入口文件
import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 通过NestFactory.create(AppModule)构建一个
  app.enableVersioning({
    type: VersioningType.URI
  }) // 接口版本控制
  await app.listen(3000); // 监听端口
}
bootstrap();
