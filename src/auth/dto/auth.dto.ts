import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class CreateAuthDto {
    @ApiProperty({example:'username',description:'darkdp'})
    @IsNotEmpty()
    @IsString()
    username:string

    @ApiProperty({example:'password',description:'password'})
    @IsNotEmpty()
    @IsString()
    password:string
}
