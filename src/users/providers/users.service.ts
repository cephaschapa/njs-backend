import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamsDto } from '../dtos/get-user-params.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create.user.dto';

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
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  /**
   * This function creates a new user
   * @param user */

  public async createUser(createUserDto: CreateUserDto) {
    // check if user exists
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });

    // Handle exception

    // Create user
    let newUser = this.usersRepository.create(createUserDto);
    newUser = await this.usersRepository.save(newUser);

    // Return user

    return newUser;
  }

  public findAll(
    getUsersParamDto: GetUserParamsDto,
    limit: number,
    page: number,
  ): any {
    return [];
  }

  /**
   * This function returns a user by id
   * @param id */

  public findById(id: string): any {
    return '';
  }
}
