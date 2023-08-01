import { IsNotEmpty, IsNumber, IsString, isNumber } from 'class-validator';

export class CreateMenuDto {
  @IsNotEmpty()
  @IsString()
  text_uz: string;

  @IsNotEmpty()
  @IsString()
  text_ru: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsNumber()
  order: number;
}
