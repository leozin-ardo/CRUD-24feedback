import {
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Entity,
    OneToOne,
    JoinColumn,
    ManyToMany,
    JoinTable,
} from "typeorm";
import Category from "./Category";
import Feedback from "./Feedback";
import Goal from "./Goal";
import Improvements from "./Improvements";
import Team from "./Team";

@Entity()
export default class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => Category)
    @JoinColumn()
    category: Category;

    @ManyToMany(() => Team)
    @JoinTable({name: "team_users"})
    teams: Team[];

    @ManyToMany(() => Goal)
    @JoinTable({name: "goal_user"})
    goals: Goal[];

    @ManyToMany(() => Improvements)
    @JoinTable({name: "improvement_user"})
    improvements: Improvements[];

    @ManyToMany(() => Feedback)
    @JoinTable({name: "feedback_user"})
    feedbacks: Feedback[];
}
