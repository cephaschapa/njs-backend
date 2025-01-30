import {
  Body,
  Controller,
  Delete,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { TagsService } from './providers/tags.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateTagDto } from './dtos/create-tag.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  // Create a new tag
  @Post()
  @ApiOperation({ summary: 'Create a new tag' })
  @ApiResponse({
    status: 201,
    description: 'Tag created successfully',
  })
  public async create(@Body() createTagDto: CreateTagDto) {
    return await this.tagsService.create(createTagDto);
  }

  @Delete()
  @ApiOperation({
    summary: 'Delete a tag',
    description: 'Delete a tag by id',
  })
  @ApiResponse({
    status: 200,
    description: 'Tag deleted successfully',
  })
  public async delete(@Query('id', ParseIntPipe) id: number) {
    return await this.tagsService.delete(id);
  }
}
