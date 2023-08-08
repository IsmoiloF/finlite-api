import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class StudentWorkplace {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  work_place_name_uz:string
  
  @Column()
  work_place_name_ru:string

  @Column()
  user_id:number

}


