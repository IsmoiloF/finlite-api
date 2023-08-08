import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text_uz:string
  
  @Column()
  text_ru:string

  @Column()
  slug:string

  @Column()
  order:number
}

