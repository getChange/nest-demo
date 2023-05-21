// 常见功能用于处理http请求以及调用service层的处理方法
import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // controller用来控制路由 
export class AppController {
  constructor(@Inject('appservice') private readonly appService: AppService,
  @Inject('ValueTest') private readonly shop: string[],
  @Inject('FactoryTest') private readonly FactoryTest: number
  ) { // private readonly appService: AppService表示依赖注入，私有的、只读的

  }

  @Get()
  // getHello(): string {
  //   return this.appService.getName();
  // }
  @Get()
  // getShop(): string[] {
  //   return this.shop;
  // }
  @Get()
  getFactory(): number {
    return this.FactoryTest;
  }
}
