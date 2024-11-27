import { Controller, Post } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    // Injecting auth service

    private readonly authService: AuthService,
  ) {}

  // POST localhost:3000/auth/login
  @Post('/login')
  public login() {
    return this.authService.login('email', 'password', 'id');
  }
}
