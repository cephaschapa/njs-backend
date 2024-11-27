import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetUserParamsDto {
  @ApiPropertyOptional({
    description: 'User ID',
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
