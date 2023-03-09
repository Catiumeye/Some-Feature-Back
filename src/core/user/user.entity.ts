import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn,  } from "typeorm";
import { IsEmail, IsString, Length } from "class-validator";
import { Post } from "../post/post.entity";


@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn({type: 'int4'})
    id: number;

    @Length(3, 20)
    @IsString()
    @Column({type: 'varchar', unique: true})
    username: string;

    @IsEmail()
    @Column({type: 'varchar', select: false, unique: true})
    email: string;

    @Column({type: 'varchar', select: false})
    password: string;

    @CreateDateColumn({select: false})
    created_at: Date;

    @UpdateDateColumn({select: false})
    updated_at: Date;

    @DeleteDateColumn({select: false})
    deleted_at: Date;

    @ManyToMany(type => User)
    @JoinTable()
    friends: User[];

    @OneToMany(type => Post, post => post.user)
    posts: Post[];
}