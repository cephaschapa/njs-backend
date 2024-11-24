import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamsDto } from '../dtos/get-user-params.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    // Inject
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public USER_DATA = [
    {
      id: '1',
      name: 'John Doe',
      email: 'jd@doe.com',
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'dj@doe.com',
    },
  ];
  /**
   * find all users
   */
  public findAll(
    getUsersParamDto: GetUserParamsDto,
    limit: number,
    page: number,
  ): any {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    return this.USER_DATA;
  }
  public findById(id: string): any {
    return this.USER_DATA.find((user) => user.id === id);
  }
}
