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
<<<<<<< HEAD



@Module({
    imports:[JwtModule,ConfigModule,PassportModule,AuthModule],
=======
import { LocalStrategy } from 'src/Auth/Strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';


@Module({
    imports:[JwtModule,ConfigModule,PassportModule],
>>>>>>> 48b9fbedd540ae4fdb19858e360ec2208c5748cd
    controllers:[UserController],
    providers:[UserService,{
        provide: APP_GUARD,
        useClass: RolesGuard,
      },{provide:APP_GUARD,useClass:JwtStrategy}]
})
export class UserModule{}
