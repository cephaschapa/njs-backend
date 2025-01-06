import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamsDto } from '../dtos/get-user-params.dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * Class to class to connect Users table and perform business logic operations
 */
@Injectable()
export class UsersService {
  /**
   * Constructor
   * @param authService
   */
  constructor(
    // Inject
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /**
   * Test data
   */

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
   * This function returns all users
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

  /**
   * This function returns a user by id
   * @param id */

  public findById(id: string): any {
    return this.USER_DATA.find((user) => user.id === id);
  }
}
