import { Controller, Get, Post, Body, Patch, Param, Delete, Version, Request, ConsoleLogger, Query } from '@nestjs/common';
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
  create(@Request() req) {
    console.log(req)
    return {
      code: 200
    }
  }
}
