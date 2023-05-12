import {Controller,Get, Req, UseGuards, UseInterceptors} from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/Auth/Decorators/roles.decorator";
import { RolesGuard } from "src/Auth/Guards/jwt.guard";
import { JwtStrategy } from "src/Auth/Strategy/jwt.strategy";
import { LoggingInterceptor } from "src/Interceptors/logging.interceptor";


@UseInterceptors(new LoggingInterceptor())
@UseGuards(AuthGuard("jwt"))
@Controller("user")
export class UserController{
    constructor(){}

    @Get("me")
    @Roles("user")
    getUserInFor(@Req() value:any): void{
        console.log(232321);  
    }
}