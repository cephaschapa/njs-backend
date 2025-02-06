import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    // Injecting UsersService
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}
  public async login(email: string, password: string, id) {
    // check if user exists
    const user = await this.usersService.findOneById(id);
    // login
    if (user.email === email && user.password === password) {
      return {
        token: 'token',
      };
    }
  }

  public isAuth() {
    return true;
  }
}
