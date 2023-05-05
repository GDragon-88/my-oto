import {Controller,Get, UseGuards} from "@nestjs/common"


@Controller("user")
export class UserController{
    constructor(){}

    @Get("me")

    getUserInFor(): void{
        console.log(1);
        
    }
}