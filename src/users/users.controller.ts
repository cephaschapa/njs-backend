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
import { ApiTags } from '@nestjs/swagger';
@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('/:id?')
  public getUsers(
    @Param() getUsersParamDto: GetUserParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: any,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ): string {
    return this.userService.findAll(getUsersParamDto, limit, page);
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDto): string {
    console.log(createUserDto instanceof CreateUserDto);
    return 'You sent a POST request to /users';
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
