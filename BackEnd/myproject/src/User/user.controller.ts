import {Controller,Get, Req, UseGuards} from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport";
import {RolesGuard} from "../Auth/Guards/jwt.guard"
import {Roles} from "../Auth/Decorators/roles.decorator"
@Controller("user")
export class UserController{
    constructor(){}

    @Get("me")
    @UseGuards(RolesGuard)
    @UseGuards(AuthGuard("jwt"))
    @Roles("user")
    
    getUserInFor(@Req() value:any): void{
        
        console.log(1);
        
        
    }
}