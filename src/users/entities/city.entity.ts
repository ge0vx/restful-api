import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn} from 'typeorm';
import {Country} from './country.enity';
import {Address} from './address.entity';

@Entity()
export class City {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @ManyToOne(() => Country, (country)=> country.cities)
    @JoinColumn({name: 'country_id'})
    country: Country;

    @OneToMany(() => Address, (address) => address.city)
    addresses: Address[];
}
