import { Injectable } from '@nestjs/common';
import { GetUserParamsDto } from '../dtos/get-user-params.dto';

@Injectable()
export class UsersService {
  /**
   * find all users
   */
  public findAll(
    getUsersParamDto: GetUserParamsDto,
    limit: number,
    page: number,
  ): any {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'jd@doe.com',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'dj@doe.com',
      },
    ];
  }
}