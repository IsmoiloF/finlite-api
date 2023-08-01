

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_uz:string
  
  @Column()
  name_ru:string 

  @Column()
  descption_uz:string

  @Column()
  descption_ru:string

  @Column()
  video:string
}
