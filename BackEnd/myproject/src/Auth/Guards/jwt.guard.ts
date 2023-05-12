import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from '../auth.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector,private authService:AuthService) {
  
  }

 async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if(!roles){
      return true
    }
    console.log(roles);
    console.log(1);
    
    const request = context.switchToHttp().getRequest();
    const user = request.headers.authorization.split(" ")[1];
    let dataUser = await this.authService.validateUserByToken(user)
  
    if(roles[0] ==dataUser.role){
        return dataUser
    }
    
    return false
  }
}




