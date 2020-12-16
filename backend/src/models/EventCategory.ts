import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class EventCategory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;
}
