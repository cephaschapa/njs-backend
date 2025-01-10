import { Injectable } from '@nestjs/common';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto';
import { MetaOptions } from '../meta-option.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetaOptionsService {
  constructor(
    /**
     * Inject meta options repository
     */
    @InjectRepository(MetaOptions)
    private readonly metaOptionsRepository: Repository<MetaOptions>,
  ) {}
  public async create(
    createMetaOptionsDto: CreatePostMetaOptionsDto,
  ): Promise<MetaOptions> {
    let MetaOption = this.metaOptionsRepository.create(createMetaOptionsDto);
    return await this.metaOptionsRepository.save(MetaOption);
  }
}
