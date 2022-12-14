import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {City} from './city.entity';

@Entity()
export class Country {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToMany(() => City, (city) => city.country)
    cities: City[];
}
