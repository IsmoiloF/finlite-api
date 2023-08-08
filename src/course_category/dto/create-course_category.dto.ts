import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateCourseCategoryDto {
    @ApiProperty({example:'name_uz',description:'vchgjk'})
    @IsNotEmpty()
    @IsString()
    name_uz:string

    @ApiProperty({example:'name_ru',description:'vchgjk'})
    @IsNotEmpty()
    @IsString()
    name_ru:string

    @ApiProperty({example:'descption_uz',description:'vchgjk'})
    @IsNotEmpty()
    @IsString()
    descption_uz:string

    @ApiProperty({example:'descption_ru',description:'vchgjk'})
    @IsNotEmpty()
    @IsString()
    descption_ru:string

    @ApiProperty({example:'course_id',description:'3'})
    @IsNotEmpty()
    @IsNumber()
    course_id:number
}
