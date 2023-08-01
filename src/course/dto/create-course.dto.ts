import { IsNotEmpty, IsString } from "class-validator"

export class CreateCourseDto {
    @IsNotEmpty()
    @IsString()
    name_uz:string
    @IsNotEmpty()
    @IsString()
    name_ru:string
    @IsNotEmpty()
    @IsString()
    descption_uz:string
    @IsNotEmpty()
    @IsString()
    descption_ru:string
    @IsNotEmpty()
    @IsString()
    video:string
}
