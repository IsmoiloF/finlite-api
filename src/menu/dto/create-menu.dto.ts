import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, isNumber } from 'class-validator';

export class CreateMenuDto {
  @ApiProperty({example:'text_uz',description:'vhbjsavkcuw'})
  @IsNotEmpty()
  @IsString()
  text_uz: string;

  @ApiProperty({example:'text_ru',description:'vhbjsavkcuw'})
  @IsNotEmpty()
  @IsString()
  text_ru: string;

  @ApiProperty({example:'slug',description:'vhbjsavkcuw'})
  @IsNotEmpty()
  @IsString()
  slug: string;

  
  @ApiProperty({example:'order',description:'1'})
  @IsNotEmpty()
  @IsNumber()
  order: number;
}
