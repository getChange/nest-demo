// 封装通用的业务逻辑、与数据层的交互（数据库等）、其他额外的一些三方请求
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService2 {
  getHello(): string {
    return 'AppService2';
  }

  getName(): string {
    return 'luffy'
  }
}
