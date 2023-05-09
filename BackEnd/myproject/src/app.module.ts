

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User/user.entity';
import { AuthModule } from './Auth/auth.module';
import { UserModule } from './User/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'chien2811',
      database: 'my_oto',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,UserModule
  ],
})
export class AppModule {}
