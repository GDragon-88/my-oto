import {Controller,Get, Req, UseGuards, UseInterceptors} from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport";
<<<<<<< HEAD
import { Roles } from "src/Auth/Decorators/roles.decorator";
import { RolesGuard } from "src/Auth/Guards/jwt.guard";
import { JwtStrategy } from "src/Auth/Strategy/jwt.strategy";
import { LoggingInterceptor } from "src/Interceptors/logging.interceptor";


@UseInterceptors(new LoggingInterceptor())
@UseGuards(AuthGuard("jwt"))
=======
import {RolesGuard} from "../Auth/Guards/jwt.guard"
import {Roles} from "../Auth/Decorators/roles.decorator"
>>>>>>> 48b9fbedd540ae4fdb19858e360ec2208c5748cd
@Controller("user")
export class UserController{
    constructor(){}

    @Get("me")
<<<<<<< HEAD
    @Roles("user")
    getUserInFor(@Req() value:any): void{
        console.log(232321);  
=======
    @UseGuards(RolesGuard)
    @UseGuards(AuthGuard("jwt"))
    @Roles("user")
    
    getUserInFor(@Req() value:any): void{
        
        console.log(1);
        
        
>>>>>>> 48b9fbedd540ae4fdb19858e360ec2208c5748cd
    }
}