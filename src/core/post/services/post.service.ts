import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PaginationInput } from "src/common/input/pagination.input";
import { Repository } from "typeorm";
import { Post } from "../post.entity";


@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post) private postsRepository: Repository<Post>,
    ) {}

    async getTasksByUserId(id: number, pagination: PaginationInput) {
        return await this.postsRepository.findAndCount({
            where: {
                user: {id: id}
            },
            skip: pagination.skip,
            take: pagination.take
        })
    }
}