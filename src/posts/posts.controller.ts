import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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
  @Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

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
  public createPost(@Body() createPostDto: CreatePostDto) {}

  @ApiResponse({
    status: 200,
    description: 'You get a 200 response if the post is created successfully',
  })
  @ApiOperation({
    summary: 'Updates an existing post',
    description: 'Updates and existing post with the provided data',
  })
  @Patch('/:postId')
  public updatePost(
    @Param('postId') postId: string,
    @Body() patchPostDto: PatchPostDto,
  ) {
    console.log(patchPostDto);
  }
}
