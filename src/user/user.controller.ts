import { Controller, Get, Post, Body, Patch, Param, Delete, Version, Request, ConsoleLogger, Query, Headers, HttpCode, Redirect } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  // findAll(@Request() req) {
  //   console.log(req.query)
  //   return {
  //     code: 200,
  //     message: req.query.name
  //   }
  // }
  findAll(@Query() query) {
    console.log(query)
    return {
      code: 200,
      message: query.name
    }
  }
  @Post()
  // create(@Request() req) {
  //   console.log(req.body)
  //   return {
  //     code: 200,
  //     message: req.body.name
  //   }
  // }
  create(@Body('age') body) {
    console.log(body)
    return {
      code: 200,
      // message: body.name
    }
  }

  @Get(':id')
  @HttpCode(500) // 控制状态码
  // @Redirect 重定向路由器
  // findId(@Request() req) {
  //   console.log(req.params)
  //   return {
  //     code: 200
  //   }
  // }
  findId(@Param('id') params, @Headers() headers) {
    console.log(params)
    console.log(headers)
    return {
      code: 200
    }
  }
}
