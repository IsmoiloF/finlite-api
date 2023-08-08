import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateStudentWorkplaceDto {
    @ApiProperty({example:'work_place_name_uz',description:'gfndf'})
    @IsNotEmpty()
    @IsString()
    work_place_name_uz:string

    @ApiProperty({example:'work_place_name_ru',description:'gfndf'})
    @IsNotEmpty()
    @IsString()
    work_place_name_ru:string

    @ApiProperty({example:'user_id',description:'2'})
    @IsNotEmpty()
    @IsString()
    user_id:number
}
