import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateSertficateDto {
    @IsNotEmpty()
    @IsNumber()
    user_id:number
    @IsNotEmpty()
    @IsString()
    sertificate_kod:string
    @IsNotEmpty()
    @IsNumber()
    course_id:number
    @IsNotEmpty()
    @IsString()
    description_uz:string
    @IsNotEmpty()
    @IsString()
    description_ru:string
}
