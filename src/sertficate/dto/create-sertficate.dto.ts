import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateSertficateDto {
  @ApiProperty({example:'user_id',description:'1'})
    @IsNotEmpty()
    @IsNumber()
    user_id:number

  @ApiProperty({example:'sertificate_kod',description:'34567889'})
    @IsNotEmpty()
    @IsString()
    sertificate_kod:string

  @ApiProperty({example:'course_id',description:'2'})
    @IsNotEmpty()
    @IsNumber()
    course_id:number

  @ApiProperty({example:'description_uz',description:'vjhksavyhvgfolae'})
    @IsNotEmpty()
    @IsString()
    description_uz:string

  @ApiProperty({example:'description_ru',description:'vjhksavyhvgfolae'})
    @IsNotEmpty()
    @IsString()
    description_ru:string
}
