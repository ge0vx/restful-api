import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateUserDto {
    id: string;

    @IsNotEmpty()
    @MaxLength(20)
    username: string;

    @IsNotEmpty()
    password: string;
}
