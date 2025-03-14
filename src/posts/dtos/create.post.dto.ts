import {
  IsArray,
  IsEnum,
  IsInt,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PostType } from '../enums/postType.enum';
import { postStatus } from '../enums/postStatus.enum';
import { CreatePostMetaOptionsDto } from '../../meta-options/dtos/create-post-meta-options.dto';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { Tag } from '../../tags/tag.entity';

export class CreatePostDto {
  @ApiProperty({
    example: 'My first post',
    description: 'The title of the post',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(512)
  @MinLength(4)
  title: string;

  @ApiProperty({
    enum: PostType,
    description: "Possible values: 'post' | 'page' | 'story' | 'series'",
  })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  @ApiProperty({
    example: 'my-first-post',
    description: 'The slug of the post',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'Slug must be kebab-case e.g my-url-slug ',
  })
  slug: string;

  @ApiProperty({
    example: 'This is my first post',
    description: 'The content of the post',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    enum: postStatus,
    description: "Possible values: 'draft' | 'published' | 'arch",
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status?: postStatus;

  @ApiPropertyOptional({
    example:
      '{\r\n "@context": "https://schema.org",\r\n "@type": "Person"\r\n}',
    description: 'The excerpt of the post',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional({
    example: 'https://my-image-url.com',
    description: 'The featured image of the post',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(1024)
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    example: '2021-09-01T00:00:00.000Z',
    description: 'The date the post was published',
  })
  @IsISO8601()
  @IsOptional()
  publishedOn?: Date;

  @ApiPropertyOptional({
    example: [1, 2, 3],
    description: 'The tags ids of the post',
  })
  @IsArray()
  @IsOptional()
  @IsInt({ each: true })
  tags?: number[];

  // nested DTO
  @ApiPropertyOptional({
    type: 'object',
    required: false,
    items: {
      type: 'object',
      properties: {
        metavalue: {
          type: 'json',
          example: '{"sideBarEnabled": true}',
          description: 'meta value is a json string',
        },
      },
    },
    description: 'The meta options of the post',
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto | null;

  @ApiProperty({
    type: 'integer',
    example: 1,
    required: true,
    description: 'The author id of the post',
  })
  @IsNotEmpty()
  @IsInt()
  @Column()
  authorId: number;
}
