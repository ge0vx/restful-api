import {Column, Entity, PrimaryGeneratedColumn, OneToOne} from 'typeorm';
import { Profile } from './profile.entity';
@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @OneToOne(()=> Profile, (profile)  => profile.user)
    profile: Profile;
}
