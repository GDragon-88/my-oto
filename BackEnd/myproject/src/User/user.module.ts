import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.services';
import { JwtModule, } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from 'src/Auth/Strategy/jwt.strategy';
import { LocalStrategy } from 'src/Auth/Strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';


@Module({
    imports:[JwtModule,ConfigModule,PassportModule],
    controllers:[UserController],
    providers:[UserService,JwtStrategy,LocalStrategy]
})
export class UserModule{}
