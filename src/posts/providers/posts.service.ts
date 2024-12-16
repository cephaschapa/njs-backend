import { Injectable } from '@nestjs/common';
import { title } from 'process';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(
    // Injecting UsersService
    private readonly usersService: UsersService,
  ) {}
  public findAll(userId: string) {
    const user = this.usersService.findById(userId);

    return [
      {
        user,
        title: 'Post 1',
        content: 'Content 1',
      },
      {
        user,
        title: 'Post 2',
        content: 'Content 2',
      },
    ];
  }

  // Create Post Request
  public createPost() {}
}
