// 跟模块用于处理其他类的引用与共享
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppService2 } from './app.service2';
import { StoryModule } from './story/story.module';
import { UserModule } from './user/user.module';

@Module({ // 类装饰器修饰AppModule
  imports: [StoryModule, UserModule],
  controllers: [AppController],
  providers: [AppService2, {
    provide: "appservice",
    useClass: AppService
  }, {
      provide: 'ValueTest',
      useValue: ['TB', 'pdd', 'JD']
    }, {
      provide: 'FactoryTest',
      inject: [AppService2],
      // 异步模式
      async useFactory(AppService2: AppService2) {
        return await new Promise((res) => {
          setTimeout(()=>{
            res(AppService2.getHello())
          },2000)
        })
      }
      // useFactory(AppService2: AppService2) {
      // //  console.log(AppService2.getHello())
      // //  return 123

      // }
    }],
})
export class AppModule { }
