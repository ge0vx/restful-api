import {Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import {Address} from './address.entity';
@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToOne(()=>Address)
    @JoinColumn({name: 'address_id'})
    address: Address
}
