import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Sector from "./Sector";
import User from "./User";

@Entity()
export default class Team {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => User)
    @JoinColumn()
    mananger: User;

    @ManyToOne(() => Sector, (sector) => sector.teams)
    sector: Sector;
}
