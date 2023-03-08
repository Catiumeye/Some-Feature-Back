import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn,  } from "typeorm";
import { IsEmail, Length } from "class-validator";


@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn({type: 'int4'})
    id: number;

    @Length(3, 20)
    @Column({type: 'varchar'})
    username: string;

    @IsEmail()
    @Column({type: 'varchar', select: false})
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
}