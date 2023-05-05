import { Body, Controller,Injectable,Post } from "@nestjs/common";
import * as Auth from "./DTO/sign.up.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController{
    constructor(private authService:AuthService){}

    @Post("register")
    register(@Body() createUser:Auth.SignUpDTO) {
      return  this.authService.createNewAccount(createUser)
    }


    // sign in 
    @Post("sign-in")
    signUp(@Body() signUpValue:Auth.SignInDTO){
      return this.authService.signIn(signUpValue)
    }

    
}