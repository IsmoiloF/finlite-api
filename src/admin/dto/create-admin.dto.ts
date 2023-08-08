import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class CreateAdminDto {
    @ApiProperty({example:'username',description:'darkdp'})
    @IsNotEmpty()
    @IsString()
    username:string

    @ApiProperty({example:'password',description:'password'})
    @IsNotEmpty()
    @IsString()
    password:string

    // @ApiProperty({example:'is_active',description:'true'})
    // @IsNotEmpty()
    // @IsBoolean()
    // is_active:boolean
}
