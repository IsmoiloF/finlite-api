import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateFinlitMainInfoDto {
    @ApiProperty({example:'main_svg',description:'url'})
    @IsNotEmpty()
    @IsString()
    main_svg:string

    @ApiProperty({example:'main_text_uz',description:'hufvlshui'})
    @IsNotEmpty()
    @IsString()
    main_text_uz:string

    @ApiProperty({example:'main_text_ru',description:'hufvlshui'})
    @IsNotEmpty()
    @IsString()
    main_text_ru:string

    @ApiProperty({example:'tel_number',description:'+998944639099'})
    @IsNotEmpty()
    @IsString()
    tel_number:string

    @ApiProperty({example:'adress',description:'Xorazim viloyati, xiva tumani'})
    @IsNotEmpty()
    @IsString()
    adress:string
}
