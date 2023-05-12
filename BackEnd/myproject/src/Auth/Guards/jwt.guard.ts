import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from '../auth.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector,private authService:AuthService) {
  
  }

 async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
<<<<<<< HEAD
    if(!roles){
      return true
=======
   
    
    
    console.log(roles,'rolee');
    
    if (!roles) {
      return true;
>>>>>>> 48b9fbedd540ae4fdb19858e360ec2208c5748cd
    }
    console.log(roles);
    console.log(1);
    
    const request = context.switchToHttp().getRequest();
<<<<<<< HEAD
    const user = request.headers.authorization.split(" ")[1];
    let dataUser = await this.authService.validateUserByToken(user)
  
    if(roles[0] ==dataUser.role){
        return dataUser
    }
    
    return false
=======
    console.log(request.headers.authorization);
    
    const user = request.user;
    console.log(user,"user");
    
>>>>>>> 48b9fbedd540ae4fdb19858e360ec2208c5748cd
  }
}




