import { Body, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create.post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOptions } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { Tag } from 'src/tags/tag.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class PostsService {
  constructor(
    // Injecting UsersService
    private readonly usersService: UsersService,

    // Inject post repository
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,

    // Injecting MetaOptions Repository

    private readonly tagService: TagsService,

    // Inject user repository
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  /**
   * Create a new post
   */
  public async create(@Body() createPostDto: CreatePostDto) {
    // Find author from database based on authorId
    let user = await this.usersRepository.findOneBy({
      id: createPostDto.authorId,
    });

    let tags = await this.tagService.findMultiple(createPostDto.tags);
    // Create post
    let post = this.postRepository.create({
      ...createPostDto,
      author: user,
      tags: tags,
    });

    // Save post
    return await this.postRepository.save(post);
  }

  /**
   * Find all posts
   */
  public async findAll() {
    let posts = await this.postRepository.find();

    return posts;
  }

  /**
   * Find post by id
   */

  public async findById(id: number) {
    let post = await this.postRepository.find({
      relations: {
        metaOptions: true,
        // author: true,
      },
    });

    return post;
  }

  /**
   * delete posts by id`
   */

  public async deleteById(id: number) {
    // find the post if it exists
    await this.postRepository.delete(id);

    return {
      deleted: true,
      id,
    };
  }
}
