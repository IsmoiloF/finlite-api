import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Sertficate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id:number
  
  @Column()
  sertificate_kod:string

  @Column()
  course_id:number

  @Column()
  description_uz:string

  @Column()
  description_ru:string
}


