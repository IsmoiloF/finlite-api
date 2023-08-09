import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAboutDto {
    @ApiProperty({example:'description_uz',description:'salom'})
    @IsNotEmpty()
    @IsString()
    description_uz:string

    @ApiProperty({example:'description_ru',description:'zdrastvi'})
    @IsNotEmpty()
    @IsString()
    description_ru:string

}
