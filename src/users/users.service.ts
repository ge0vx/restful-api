import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserI } from './entities/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Observable<CreateUserDto>>{
    const { password } = createUserDto;
    const plainToHash = await hash(password, 10);
    return from(
      this.userRepository.save({ ...createUserDto, password: plainToHash }),
    );
  }

  findAll(): Observable<CreateUserDto[]> {
    return from(this.userRepository.find());
  }

  findOne(id: string) {
    return from(this.userRepository.findOneBy({id}));
  }

}
