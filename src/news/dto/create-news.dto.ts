import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateNewsDto {
  @ApiProperty({example:'description_uz',description:'ilegurvyoisy'})
    @IsNotEmpty()
    @IsString()
    description_uz:string

  @ApiProperty({example:'description_ru',description:'ilegurvyoisy'})
    @IsNotEmpty()
    @IsString()
    description_ru:string

  @ApiProperty({example:'photo',description:'url'})
    @IsNotEmpty()
    @IsString()
    photo:string
}
