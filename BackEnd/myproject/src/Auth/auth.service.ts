import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from "../User/user.entity"
import * as Auth from './DTO/sign.up.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { access } from 'fs';
@Injectable()
export class AuthService{
    constructor (@InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
    private configService:ConfigService){}

    // create new user
    async createNewAccount(value:Auth.SignUpDTO) {
       try {
        const saltOrRounds = 10
        const hash = await bcrypt.hash(value.password, saltOrRounds);
        value.password = hash
        await this.usersRepository.save(value)
        return "create thanh cong"
       } catch (error) {
            if(error.errno ==1062) throw new  HttpException ("Email is exist", HttpStatus.FORBIDDEN)
       }
    }

    // login to hompages

    async signIn(value:Auth.SignInDTO){
        let dataUse = await this.usersRepository.findOneBy({email:value.email})

        let hash = await bcrypt.compare(value.password,dataUse.password);
        console.log(this.configService.get("SECRET_JWT"));
        
        if(hash){
            const payload = {id:dataUse.id,username:dataUse.userName,role:dataUse.role}
            
            return {
                "access_token" : await this.jwtService.signAsync(payload , {secret:this.configService.get("SECRET_JWT")})
            }
        }

        return hash
        
    }

    
    
}