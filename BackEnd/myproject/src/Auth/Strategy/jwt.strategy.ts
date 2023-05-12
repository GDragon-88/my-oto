import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";


import { ExtractJwt, Strategy } from 'passport-jwt'
@Injectable()
export class JwtStrategy extends PassportStrategy (Strategy,'jwt'){
    constructor(public configService:ConfigService) {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: configService.get("SECRET_JWT")
        });
      }
    
    async validate (payload: any) {
      console.log(payload);
      
        
            const user = { userId: payload.id, username: payload.username }
            return user
        
        
    }   
}