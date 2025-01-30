import { Post } from 'src/posts/post.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 1024,
  })
  featuredImageUrl: string;

  @ManyToMany(() => Post, (post) => post.tags, {
    onDelete: 'CASCADE',
  })
  posts: Post[];

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  udateDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  // @ManyToMany(() => Tag, (tag) => tag.posts)
}
