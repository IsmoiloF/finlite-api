import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateApplicantDto {
    @ApiProperty({example:'name',description:'shoxruh'})
    @IsNotEmpty()
    @IsString()
    name:string

    @ApiProperty({example:'phonr_number',description:'+998914325836'})
    @IsNotEmpty()
    @IsString()
    phone_number:string

    @ApiProperty({example:'course_id',description:'2'})
    @IsNumber()
    course_id:number
}
