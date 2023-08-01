import { IsNotEmpty, IsString } from "class-validator"

export class CreateNewsDto {
    @IsNotEmpty()
    @IsString()
    description_uz:string
    @IsNotEmpty()
    @IsString()
    description_ru:string
    @IsNotEmpty()
    @IsString()
    photo:string
}
