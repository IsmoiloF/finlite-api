import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateApplicantDto {
    @IsNotEmpty()
    @IsString()
    name:string
    @IsNotEmpty()
    @IsString()
    phone_number:string
    @IsNotEmpty()
    @IsNumber()
    course_id:number
}
