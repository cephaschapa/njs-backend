import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create.user.dto';
import { GetUserParamsDto } from './dtos/get-user-params.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { UsersCreateManyProvider } from './providers/users.create-many.provider';
import { CreateManyUsersDto } from 'src/posts/dtos/create-many-user.dto';
@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('/:id?')
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the query',
  })
  @ApiResponse({
    status: 404,
    description: 'No users found',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'Limit the number of users returned',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: true,
    description: 'Specify the page number',
    example: 1,
  })
  public getUsers(
    @Param() getUsersParamDto: GetUserParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.userService.findAll(getUsersParamDto, limit, page);
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Post('create-many')
  public createManyUsers(@Body() createUsersDto: CreateManyUsersDto) {
    return this.userService.createMany(createUsersDto);
  }

  @Patch('/:id?')
  public updateUser(@Body() patchUserDto: PatchUserDto): string {
    return 'You sent a PATCH request to /users';
  }

  @Put()
  public replaceUser(): string {
    return 'You sent a PUT request to /users';
  }

  @Delete()
  public deleteUser(): string {
    return 'You sent a DELETE request to /users';
  }
}
