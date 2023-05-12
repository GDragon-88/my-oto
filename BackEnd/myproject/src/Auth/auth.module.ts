import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "src/User/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from "@nestjs/config";
<<<<<<< HEAD

import { PassportModule } from "@nestjs/passport";
=======
import { JwtStrategy } from "./Strategy/jwt.strategy";
import { PassportModule } from '@nestjs/passport';
>>>>>>> 48b9fbedd540ae4fdb19858e360ec2208c5748cd





@Module({
<<<<<<< HEAD
    imports:[TypeOrmModule.forFeature([User]),JwtModule,ConfigModule,PassportModule ],
=======
    imports:[TypeOrmModule.forFeature([User]),JwtModule,ConfigModule ,PassportModule],
>>>>>>> 48b9fbedd540ae4fdb19858e360ec2208c5748cd
    controllers:[AuthController],
    providers:[AuthService,JwtService,],
    exports:[JwtService,AuthService]
})

export class AuthModule{}