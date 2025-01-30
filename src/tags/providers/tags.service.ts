import { Injectable } from '@nestjs/common';
import { Post } from 'src/posts/post.entity';
import { In, Repository } from 'typeorm';
import { Tag } from '../tag.entity';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {
  constructor(
    // Injecting PostRepository
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  public async create(createTagDto: CreateTagDto) {
    let tag = await this.tagRepository.create(createTagDto);
    return await this.tagRepository.save(tag);
  }

  public async findMultiple(tags: number[]) {
    let results = await this.tagRepository.find({
      where: {
        id: In(tags),
      },
    });
    return results;
  }

  public async findById(id: number) {
    return 'Find tag by id';
  }

  public async delete(id: number) {
    await this.tagRepository.delete(id);
    return {
      deleted: true,
      id,
    };
  }
}
