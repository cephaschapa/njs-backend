import { DataSource } from 'typeorm';
import {
  ConflictException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { User } from '../user.entity';
import { CreateUserDto } from '../dtos/create.user.dto';
import { CreateManyUsersDto } from 'src/posts/dtos/create-many-user.dto';

@Injectable()
export class UsersCreateManyProvider {
  constructor(
    /**
     * Inject the datasource
     */
    private dataSource: DataSource,
  ) {}

  public async createMany(createManyUsersDto: CreateManyUsersDto) {
    let newUsers: User[] = [];
    console.log(createManyUsersDto);

    // Create Query Runner Instance

    const queryRunner = this.dataSource.createQueryRunner();
    try {
      // Connect the query ryunner to the datasource
      await queryRunner.connect();
      await queryRunner.startTransaction();
    } catch (error) {
      throw new RequestTimeoutException('Error connecting to the database');
    }

    // Start the transaction

    try {
      for (let user of createManyUsersDto.users) {
        let newUser = queryRunner.manager.create(User, user);
        let result = await queryRunner.manager.save(newUser);
        newUsers.push(result);
      }
      await queryRunner.commitTransaction();
    } catch (error) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
      throw new ConflictException('Could not complete the transaction', {
        description: String(error),
      });
    } finally {
      // you need to release a queryRunner which was manually instantiated
      try {
        await queryRunner.release();
      } catch (error) {
        throw new RequestTimeoutException('Error releasing the queryRunner', {
          description: String(error),
        });
      }
    }

    return {
      users: newUsers,
    };
  }
}
