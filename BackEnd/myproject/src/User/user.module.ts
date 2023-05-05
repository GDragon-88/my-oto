import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.services';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';


@Module({
    imports:[JwtModule,ConfigModule],
    controllers:[UserController],
    providers:[UserService]
})
export class UserModule{}
