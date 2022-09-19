import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn, OneToOne} from 'typeorm';
import {City} from './city.entity'
/*import {User} from './user.entity';*/

@Entity()
export class Address {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @ManyToOne(() => City, (city)=> city.addresses)
    @JoinColumn({name: 'city_id'})
    city: City;
/*
    @OneToOne(()=>User, (user) => user.address)
    user:User;
*/
}
