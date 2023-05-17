import { Controller, Get, Post, Body, Patch, Param, Delete, Version, Request, ConsoleLogger } from '@nestjs/common';
import { StoryService } from './story.service';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';

/**
 * {
 *  path: 'story',
 *  version: '1'
 * }
 * 版本控制。
 */
@Controller('story')
export class StoryController {
  constructor(private readonly storyService: StoryService) { }

  @Post()
  create(@Body() createStoryDto: CreateStoryDto) {
    return this.storyService.create(createStoryDto);
  }

  @Get()
  @Version('1') // 控制单个请求方式的单个版本
  findAll() {
    return this.storyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoryDto: UpdateStoryDto) {
    return this.storyService.update(+id, updateStoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storyService.remove(+id);
  }
}
