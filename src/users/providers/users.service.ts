import { Injectable } from '@nestjs/common';
import { GetUserParamsDto } from '../dtos/get-user-params.dto';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create.user.dto';
import { ConfigService } from '@nestjs/config';

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

    // Injecting ConfigService

    private readonly configService: ConfigService,
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
    const env = this.configService.get<string>('DB_HOST');
    console.log(env);
    return [];
  }

  /**
   * This function returns a user by id
   * @param id */

  public async findOneById(id: number): Promise<User> {
    return await this.usersRepository.findOneBy({ id });
  }

  /**
   * This function returns a user by email
   * @param email */

  public findByEmail(email: string): any {
    return '';
  }
}
