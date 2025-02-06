import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostType } from './enums/postType.enum';
import { postStatus } from './enums/postStatus.enum';
import { MetaOptions } from '../meta-options/meta-option.entity';
import { Tag } from '../tags/tag.entity';
import { User } from '../users/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: PostType,
    nullable: false,
    default: PostType.POST,
  })
  postType: PostType;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: postStatus,
    nullable: false,
    default: postStatus.DRAFT,
  })
  status: postStatus;

  @Column({
    type: 'text',
    nullable: true,
  })
  content: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImage: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  publishedOn: Date;

  //  TODO: Add the following columns to the Post entity seperately

  @OneToOne(() => MetaOptions, (metaOptions) => metaOptions.post, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  metaOptions?: MetaOptions;

  @ManyToOne(() => User, (user) => user.posts, {
    eager: true,
  }) // define inverse relationship
  author: User;

  @ManyToMany(() => Tag, (tag) => tag.posts, {
    eager: true,
  })
  @JoinTable()
  tags?: Tag[];
}
