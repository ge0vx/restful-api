import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    id: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    username: string;

    @IsNotEmpty()
    password: string;
}
