import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsString,
  MinLength,
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsEnum(['post', 'page', 'story', 'series'])
  postType: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  slug: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  content?: string;

  publishedOn: Date;

  @IsString()
  status?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  schema?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  featuredImageUrl?: string;

  @IsArray()
  @IsNotEmpty()
  @MinLength(3)
  tags?: string[];

  @IsObject()
  @IsNotEmpty()
  @MinLength(3)
  metaOptions: {};
}
