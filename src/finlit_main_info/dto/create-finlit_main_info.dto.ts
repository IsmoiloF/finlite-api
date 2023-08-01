import { IsNotEmpty, IsString } from "class-validator"

export class CreateFinlitMainInfoDto {
    @IsNotEmpty()
    @IsString()
    main_svg:string
    @IsNotEmpty()
    @IsString()
    main_text_uz:string
    @IsNotEmpty()
    @IsString()
    main_text_ru:string
    @IsNotEmpty()
    @IsString()
    tel_number:string
    @IsNotEmpty()
    @IsString()
    adress:string
}
