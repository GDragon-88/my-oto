import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";

import { ExtractJwt, Strategy } from 'passport-jwt'
@Injectable()
export class LocalStrategy extends PassportStrategy (Strategy,'local'){
    constructor(configService:ConfigService) {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: configService.get("SECRET_JWT")
        });
      }

    async validate (payload: any) {
        console.log(payload);
        if(payload.role===1) {
            return { userId: payload.sub, username: payload.username }
        }
        
    }   
}