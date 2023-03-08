import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDTO } from "../dto/create-user.dto";
import { User } from "../user.entity";
import * as argon2 from 'argon2';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) {}

    
    async getUser(id) {
        return await this.usersRepository.findOneBy({
            id: id
        })
    }

    async createUser(data: CreateUserDTO) {
        const password = await argon2.hash(data.password, {
            secret: Buffer.from(process.env.ARGON_SALT)
        });
        const response = await this.usersRepository.save({
            ...data,
            password
        });

        return response;
    }
}