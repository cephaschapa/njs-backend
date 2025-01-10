import { Body, Controller, Post } from '@nestjs/common';
import { MetaOptions } from './meta-option.entity';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(
    /**
     * Inject meta options service
     */
    private metaOptionsService: MetaOptionsService,
  ) {}

  // create a new meta option
  @Post()
  public async createMetaOption(
    @Body() createPostMetaOptionsDto: CreatePostMetaOptionsDto,
  ): Promise<MetaOptions> {
    return this.metaOptionsService.create(createPostMetaOptionsDto);
  }
}
