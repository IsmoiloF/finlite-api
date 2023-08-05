
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // @Column()
  // is_active: boolean;
}
