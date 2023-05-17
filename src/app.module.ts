// 跟模块用于处理其他类的引用与共享
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoryModule } from './story/story.module';
import { UserModule } from './user/user.module';

@Module({ // 类装饰器修饰AppModule
  imports: [StoryModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
