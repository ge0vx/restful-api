import {Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn} from 'typeorm';
import {User} from './user.entity';
import {Address} from './address.entity';

@Entity()
export class Profile {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToOne(()=>User)
    @JoinColumn({name: 'user_id'})
    user: User;

    @OneToOne(()=>Address)
    @JoinColumn({name: 'address_id'})
    address: Address
}
