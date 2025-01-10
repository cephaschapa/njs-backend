import { Module } from '@nestjs/common';
import { MetaOptionsController } from './meta-options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOptions } from './meta-option.entity';
import { MetaOptionsService } from './providers/meta-options.service';

@Module({
  controllers: [MetaOptionsController],
  imports: [TypeOrmModule.forFeature([MetaOptions])],
  providers: [MetaOptionsService],
})
export class MetaOptionsModule {}
