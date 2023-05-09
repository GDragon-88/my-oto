import {Controller,Get, Req, UseGuards} from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport";


@Controller("user")
export class UserController{
    constructor(){}

    @Get("me")
    @UseGuards(AuthGuard("local"))

    getUserInFor(@Req() value:any): void{
        
        console.log(value);
        
    }
}