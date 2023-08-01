
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Applicant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;


  @Column()
  phone_number: string;

  @Column()
  course_id: number;
}
