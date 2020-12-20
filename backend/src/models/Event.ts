import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';


@Entity('events')
export default class Events {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  hour: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @Column()
  address: string;

  @Column()
  category_id: string;

  @Column()
  image_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
