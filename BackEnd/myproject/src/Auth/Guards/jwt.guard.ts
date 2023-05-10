import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
   
    
    
    console.log(roles,'rolee');
    
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    console.log(request.headers.authorization);
    
    const user = request.user;
    console.log(user,"user");
    
  }
}


function matchRoles(roles: string[], roles1: any): boolean {
    throw new Error('Function not implemented.');
}

