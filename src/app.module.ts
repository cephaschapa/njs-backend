import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import environmentValidation from './config/environment.validation';
import { Post } from './posts/post.entity';
import { User } from './users/user.entity';
import { MetaOptions } from './meta-options/meta-option.entity';
import { Tag } from './tags/tag.entity';

// Set conditional environment

const ENV =
  process.env.NODE_ENV === 'production'
    ? '.env.production'
    : process.env.NODE_ENV === 'test'
      ? '.env.development'
      : '.env.development';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    TagsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? '.env' : ENV,
      load: [appConfig, databaseConfig],
      validationSchema: environmentValidation,
    }),
    MetaOptionsModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        autoLoadEntities:
          configService.get<string>('database.autoLoadEntities') === 'true',
        host: configService.get<string>('database.host'),
        port: +configService.get<number>('database.port'),
        synchronize:
          configService.get<string>('database.synchronize') === 'true',
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
        entities: [Post, User, MetaOptions, Tag],
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
