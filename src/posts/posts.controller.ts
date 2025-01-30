import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create.post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {
    // Injecting posts service
  }

  // GET localhost:3000/posts/:userId
  // @Get('/:userId?')
  // public getPosts(@Param('userId') userId: string) {
  //   return this.postsService.findAll(userId);
  // }

  // POST localhost:3000/posts
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if the post is created successfully',
  })
  @ApiOperation({
    summary: 'Create a new post',
    description: 'Create a new post with the provided data',
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  // get all posts
  @ApiResponse({
    status: 200,
    description: 'You get a 200 response if all posts are found',
  })
  @ApiOperation({
    summary: 'Get all posts',
    description: 'Fetches all posts from the database',
  })
  @Get()
  public getAllPosts() {
    return this.postsService.findAll();
  }

  // get posts by id
  @ApiResponse({
    status: 200,
    description: 'You get a 200 response if the post is found',
  })
  @ApiOperation({
    summary: 'Get a post',
    description: 'Fetches all posts from the database',
  })
  @Get('/:postId')
  public getPostsById(@Param('postId') postId: number) {
    return this.postsService.findById(postId);
  }

  // get posts by id
  @ApiResponse({
    status: 200,
    description: 'You get a 201 response if the post is deleted',
  })
  @ApiOperation({
    summary: 'delete a post',
    description: 'delete a post from the database',
  })
  @Delete()
  public deletePostById(@Query('id', ParseIntPipe) id: number) {
    return this.postsService.deleteById(id);
  }

  @ApiResponse({
    status: 200,
    description: 'You get a 200 response if the post is found',
  })
  @ApiOperation({
    summary: 'Updates an existing post',
    description: 'Updates and existing post with the provided data',
  })
  @Patch()
  public updatePost(@Body() patchPostDto: PatchPostDto) {
    return this.postsService.update(patchPostDto);
  }
}
