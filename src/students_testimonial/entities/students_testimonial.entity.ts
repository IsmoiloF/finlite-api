import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class StudentsTestimonial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description_uz:string
  
  @Column()
  description_ru:string
}


