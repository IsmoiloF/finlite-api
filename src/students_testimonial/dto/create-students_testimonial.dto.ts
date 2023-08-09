import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateStudentsTestimonialDto {
    @ApiProperty({example:'description_uz',description:'gfndf'})
    @IsNotEmpty()
    @IsString()
    description_uz:string

    @ApiProperty({example:'description_ru',description:'gfndf'})
    @IsNotEmpty()
    @IsString()
    description_ru:string
}
