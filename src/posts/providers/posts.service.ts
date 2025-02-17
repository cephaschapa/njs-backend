import {
  BadRequestException,
  Body,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';
import { CreatePostDto } from '../dtos/create.post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TagsService } from '../../tags/providers/tags.service';
import { User } from '../../users/user.entity';
import { PatchPostDto } from '../dtos/patch-post.dto';

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

  public async update(patchPostDto: PatchPostDto) {
    let tags = undefined;
    let post = undefined;
    try {
      // find the tag if it exists
      tags = await this.tagService.findMultiple(patchPostDto.tags);
      if (!tags) {
        throw new BadRequestException('Tags not found', {
          description: 'Tags not found',
        });
      }
      // Number of tags need to be equal to the number of tags in the request
      if (!tags || tags.length !== patchPostDto.tags.length) {
        throw new BadRequestException(
          'Please check you tag ids and ensure they are correct',
        );
      }
    } catch (error) {
      throw new RequestTimeoutException('Could not perform operation');
    }
    // find the post if it exists

    try {
      post = await this.postRepository.findOneBy({ id: patchPostDto.id });

      if (!post) {
        throw new BadRequestException('Post not found', {
          description: 'Post not found',
        });
      }
      // Update the properties
      post.title = patchPostDto.title ?? post.title;
      post.content = patchPostDto.content ?? post.content;
      post.status = patchPostDto.status ?? post.status;
      post.slug = patchPostDto.slug ?? post.slug;
      post.postType = patchPostDto.postType ?? post.postType;
      post.featuredImage = patchPostDto.featuredImageUrl ?? post.featuredImage;
      post.publishedOn = patchPostDto.publishedOn ?? post.publishedOn;
      // Assign the new tags
      post.tags = tags;
    } catch (error) {
      throw new BadRequestException(
        'Could not perfor operation please try again later',
      );
    }
    // save the post and return it
    try {
      post = await this.postRepository.save(post);
    } catch (error) {
      throw new RequestTimeoutException(
        'Could not save post please try again later',
      );
    }

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
