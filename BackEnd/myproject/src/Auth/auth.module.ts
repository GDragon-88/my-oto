import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "src/User/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from "@nestjs/config";




@Module({
    imports:[TypeOrmModule.forFeature([User]),JwtModule,ConfigModule ],
    controllers:[AuthController],
    providers:[AuthService,JwtService],
    exports:[JwtService]
})

export class AuthModule{}