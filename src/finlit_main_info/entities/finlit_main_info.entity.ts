import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class FinlitMainInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  main_svg:string
  
  @Column()
  main_text_uz:string

  @Column()
  main_text_ru:string

  @Column()
  tel_number:string

  @Column()
  adress:string
}

