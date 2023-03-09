import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";


export class CreateUserDTO {
    @ApiProperty({description: 'Aviable length 3-20'})
    @Length(3, 20)
    @IsString()
    username: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    @Length(6, 255)
    password: string;
}