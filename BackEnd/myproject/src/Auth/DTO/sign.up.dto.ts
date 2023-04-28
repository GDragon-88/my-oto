import { IsEmail, IsNotEmpty, IsPhoneNumber, MinLength,  } from "class-validator";

export class SignUpDTO {
    @IsNotEmpty()
    @IsEmail()
    email:string;
    @IsNotEmpty()
    @MinLength(7)
    password:string;
    @IsNotEmpty()
    userName:string
    @IsPhoneNumber("VN")
    phone:number
}

export class SignInDTO{
    @IsNotEmpty()
    @IsEmail()
    email:string;
    @IsNotEmpty()
    @MinLength(7)
    password:string;
}