import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Tag } from './tag.entity';
import { TagsController } from './tags.controller';
import { TagsService } from './providers/tags.service';

@Module({
  controllers: [TagsController],
  providers: [TagsService],
  imports: [TypeOrmModule.forFeature([Tag])],
  exports: [TagsService],
})
export class TagsModule {}
