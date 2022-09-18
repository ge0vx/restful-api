import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compare } from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { LoginAuthDto } from './dto/login-auth.dto';
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private jwtService: JwtService
    ) {}

    async login(userLogin: LoginAuthDto){
        const {username, password} = userLogin;
        const findUser = await this.userRepository.findOneBy({username})
        if(!findUser) throw new HttpException("USER_NOT_FOUND", 404);

        const validPassword = await compare(password, findUser.password);

        if(!validPassword) throw new HttpException("NOT_VALID_PASSWORD", 403);

        const payload = {id: findUser.id, name: findUser.username};
        const token =this.jwtService.sign(payload)

        const data = {
            user: findUser,
            token
        }
        return data;
    }
}
