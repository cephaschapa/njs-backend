import { Injectable } from '@nestjs/common';
import { Post } from 'src/posts/post.entity';
import { Repository } from 'typeorm';
import { Tag } from '../tag.entiry';
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

  public async findAll() {
    return 'Find all tags';
  }

  public async findById(id: number) {
    return 'Find tag by id';
  }
}
