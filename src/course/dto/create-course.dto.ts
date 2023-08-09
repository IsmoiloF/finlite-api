import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateCourseDto {
    @ApiProperty({example:'name_uz',description:'nest js kursi'})
    @IsNotEmpty()
    @IsString()
    name_uz:string

    @ApiProperty({example:'name_ru',description:'nest js kursi'})
    @IsNotEmpty()
    @IsString()
    name_ru:string

    @ApiProperty({example:'descption_uz',description:'kursda nest js orgatiladi'})
    @IsNotEmpty()
    @IsString()
    descption_uz:string

    @ApiProperty({example:'descption_uz',description:'kursda nest js orgatiladi'})
    @IsNotEmpty()
    @IsString()
    descption_ru:string
}
