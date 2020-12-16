import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import EventCategory from './EventCategory';

@Entity()
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

  @OneToOne(() => EventCategory)
  @JoinColumn({ name: 'category_id' })
  category_id: EventCategory;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
