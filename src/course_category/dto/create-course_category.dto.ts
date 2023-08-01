import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateCourseCategoryDto {
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
    @IsNumber()
    course_id:number
}
