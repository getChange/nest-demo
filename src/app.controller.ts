// 常见功能用于处理http请求以及调用service层的处理方法
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // controller用来控制路由 
export class AppController {
  constructor(private readonly appService: AppService) { // private readonly appService: AppService表示依赖注入，私有的、只读的

  }

  @Get()
  getHello(): string {
    return this.appService.getName();
  }
}
