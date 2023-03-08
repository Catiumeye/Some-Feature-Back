import { IsEmail, IsString, Length } from "class-validator";


export class CreateUserDTO {
    @Length(3, 20)
    @IsString()
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    @Length(6, 255)
    password: string;
}