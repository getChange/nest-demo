import { Module } from '@nestjs/common';
import { User2Service } from './user2.service';
import { User2Controller } from './user2.controller';

@Module({
  controllers: [User2Controller],
  providers: [User2Service],
  exports: [User2Service] // 模块共享是必须exports
})
export class User2Module {}
