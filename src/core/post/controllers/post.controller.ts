import { Controller, Get, HttpStatus, Param, ParseIntPipe, Query, ValidationPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PaginationInput } from "src/common/input/pagination.input";
import { PostService } from "../services/post.service";

@ApiTags('Post')
@Controller('post')
export class PostController {
    constructor(
        private readonly postService: PostService
    ) {}

    @Get(':id')
    async getPostById(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }))
        id: number
    ) {
        return await this.getPostById(id);
    }

    @Get('user/:id')
    async getPostsByUserId(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }))
        id: number,
        @Query(new ValidationPipe({transform: true})) pagination: PaginationInput
    ) {
        return await this.postService.getTasksByUserId(id, pagination);
    }
}