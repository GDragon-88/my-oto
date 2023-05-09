import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.services';
import { JwtModule, } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from 'src/Auth/Strategy/jwt.strategy';
import { LocalStrategy } from 'src/Auth/Strategy/local.strategy';


@Module({
    imports:[JwtModule,ConfigModule],
    controllers:[UserController],
    providers:[UserService,JwtStrategy,LocalStrategy]
})
export class UserModule{}
