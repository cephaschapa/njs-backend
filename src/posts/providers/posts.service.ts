import { Body, Inject, Injectable } from '@nestjs/common';
import { title } from 'process';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create.post.dto';
import { In, Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOptions } from 'src/meta-options/meta-option.entity';

@Injectable()
export class PostsService {
  constructor(
    // Injecting UsersService
    private readonly usersService: UsersService,

    // Inject post repository
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,

    // Injecting MetaOptions Repository
    @InjectRepository(MetaOptions)
    private readonly metaOptionsRepository: Repository<MetaOptions>,
  ) {}

  /**
   * Create a new post
   */
  public async create(@Body() createPostDto: CreatePostDto) {
    // Create post
    let post = this.postRepository.create(createPostDto);

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
      relations: ['metaOptions'],
      where: {
        id,
      },
    });

    return post;
  }

  /**
   * delete posts by id`
   */

  public async deleteById(id: number) {
    // find the post if it exists
    let post = await this.postRepository.findOne({
      where: {
        id,
      },
    });

    // if post does not exist
    if (!post) {
      return {
        message: 'Post not found',
      };
    }

    // delete post
    await this.postRepository.delete(post.id);

    // delete meta options
    await this,
      this.metaOptionsRepository.delete({
        id: post.metaOptions.id,
      });

    return {
      deleted: true,
      id,
    };
  }
}
