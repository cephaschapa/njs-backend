import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    // Injecting UsersService
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}
  public login(email: string, password: string, id) {
    // check if user exists
    const user = this.usersService.findById(id);
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
