import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Country } from './entities/country.enity';
import { City } from './entities/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User, City, Country])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
