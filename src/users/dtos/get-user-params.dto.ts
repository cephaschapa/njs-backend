import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class GetUserParamsDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
