// 跟模块用于处理其他类的引用与共享
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { StoryModule } from './story/story.module';

@Module({ // 类装饰器修饰AppModule
  imports: [UserModule, StoryModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
