import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('event_category')
export default class EventCategory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;
}
