import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDTO } from "../dto/CreateUser.dto";
import { User } from "../user.entity";

import { PaginationInput } from "src/common/input/pagination.input";
import { PasswordService } from "src/common/services/password.service";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>,
        private readonly passwordService: PasswordService,
    ) {}

    
    async getUser(id) {
        return await this.usersRepository.findOneBy({
            id: id
        })
    }

    async getUserList(pagination: PaginationInput) {
        return await this.usersRepository.findAndCount({
            skip: pagination.skip,
            take: pagination.take,
        })
    } 

    async createUser(data: CreateUserDTO) {
        const ExistsUser = await this.usersRepository.findOneBy([
            {email: data.email},
            {username: data.username}
        ]);

        if (ExistsUser) throw new HttpException({message: 'Same user already exists'}, 400);

        const password = await this.passwordService.hash(data.password);

        const response = await this.usersRepository.save({
            ...data,
            password
        });

        return response;
    }
}