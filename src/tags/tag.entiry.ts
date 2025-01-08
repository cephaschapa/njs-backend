import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
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
    length: 514,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'text',
    nullable: true,
    length: 1024,
  })
  desciption?: string;

  @Column({
    type: 'text',
    nullable: true,
    length: 1024,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 1024,
  })
  featuredImageUrl: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  udateDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
