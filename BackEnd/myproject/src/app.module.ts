

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User/user.entity';
import { AuthModule } from './Auth/auth.module';
import { UserModule } from './User/user.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './Auth/Guards/jwt.guard';
import { HealthCheckerModule } from './health-check/health-checker.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'chien2811',
      database: 'test_nest',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,UserModule,HealthCheckerModule
  ],
  
})
export class AppModule {}
