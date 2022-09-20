import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { hash } from 'bcrypt';
import { DataSource, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Address } from './entities/address.entity';
import { City } from './entities/city.entity';
import { UserI, UserResponse } from './entities/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
    @InjectRepository(City)
    private cityRepository: Repository<City>,
    @InjectDataSource()
    private readonly connection: DataSource,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Observable<UserI>> {
    const city = await this.cityRepository.findOne({
      where: { id: createUserDto.cityId },
    });

    if (!city) {
      throw new NotFoundException('cityId not found');
    }

    const address = new Address();
    address.street = createUserDto.address;
    address.city = city;

    const newAddress = await this.addressRepository.save(address);

    const user = new User();
    user.username = createUserDto.username;
    user.password = await hash(createUserDto.password, 10);
    user.address = newAddress;

    return from(this.userRepository.save(user));
  }

  findAll() {
    return from(this.userRepository.find());
  }

  async findOne(id: string): Promise<UserResponse> {
    const [res] = await this.connection.query(
      `SELECT 
    us.id,
    us.username AS name,
    ad.street AS street,
    ci.name AS city,
    co.name AS country
    FROM public.user AS us
    JOIN address AS ad ON us.address_id = ad.id
    JOIN city AS ci ON ad.city_id = ci.id
    JOIN country AS co ON ci.country_id = co.id
    WHERE us.id = $1
    LIMIT 1;`,
      [id],
    );

    return {
      id: res.id,
      name: res.name,
      address: {
        street: res.street,
        city: res.city,
        country: res.country,
      },
    };
  }
}
