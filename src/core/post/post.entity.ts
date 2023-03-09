import { Length } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../user/user.entity";


@Entity({name: 'post'})
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Length(3, 255)
    @Column({type: 'varchar'})
    title: string;

    @Length(20, 20000)
    @Column({type: 'text'})
    message: string;

    @CreateDateColumn({select: false})
    created_at: Date;

    @UpdateDateColumn({select: false})
    updated_at: Date;

    @DeleteDateColumn({select: false})
    deleted_at: Date;

    @ManyToOne(type => User)
    @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
    user: User;
}