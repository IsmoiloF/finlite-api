import { IsNotEmpty, IsString } from "class-validator"

export class CreateStudentsTestimonialDto {
    @IsNotEmpty()
    @IsString()
    description_uz:string
    @IsNotEmpty()
    @IsString()
    description_ru:string
    @IsNotEmpty()
    @IsString()
    photo:string
    @IsNotEmpty()
    @IsString()
    video_url:string
}
