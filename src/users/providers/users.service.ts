import {
  BadRequestException,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { GetUserParamsDto } from '../dtos/get-user-params.dto';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create.user.dto';
import { ConfigService, ConfigType } from '@nestjs/config';
import profileConfig from '../config/profile.config';

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

    // Injecting ProfileConfig
    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,
  ) {}

  /**
   * This function creates a new user
   * @param user */

  public async createUser(createUserDto: CreateUserDto) {
    let existingUser = undefined;
    try {
      // check if user exists
      existingUser = await this.usersRepository.findOne({
        where: { email: createUserDto.email },
      });

      if (existingUser) {
        console.log(existingUser);
        throw new BadRequestException(
          'User already exists, please check you email',
        );
      }
    } catch (error) {
      // Might save the details of the exception to the db and log file
      // Information which is sensitive to the user should not be exposed
      console.log(error);
      throw new RequestTimeoutException('Request Timeout', {
        description: 'User already exists',
      });
    }

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
    console.log(this.profileConfiguration.apiKey);
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
