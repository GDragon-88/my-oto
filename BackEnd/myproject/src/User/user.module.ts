import {    Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.services';
import { JwtModule, } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { RolesGuard } from 'src/Auth/Guards/jwt.guard';
import { PassportModule } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from 'src/Auth/auth.module';
import { JwtStrategy } from 'src/Auth/Strategy/jwt.strategy';



@Module({
    imports:[JwtModule,ConfigModule,PassportModule,AuthModule],
    controllers:[UserController],
    providers:[UserService,{
        provide: APP_GUARD,
        useClass: RolesGuard,
      },{provide:APP_GUARD,useClass:JwtStrategy}]
})
export class UserModule{}
