import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { PaginationInput } from "src/common/input/pagination.input";
import { BaseResult } from "src/common/result/base.result";
import { CreateUserDTO } from "../dto/CreateUser.dto";
import { UserService } from "../services/user.service";

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @HttpCode(200)
    @Get(':id')
    async getUser(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }))
        id: number
    ) {
        return await this.userService.getUser(id);
    }

    @Get('')
    @UsePipes(new ValidationPipe)
    async getUserList(@Query(new ValidationPipe({transform: true})) pagination: PaginationInput) {         
        return await this.userService.getUserList(pagination);
    }

    @ApiResponse({
        status: 200,
        description: '',
        type: BaseResult
    })
    @HttpCode(200)
    @Post('')
    @UsePipes(ValidationPipe)
    async createUser(
        @Body() body: CreateUserDTO
    ) {
        return await this.userService.createUser(body);
    }

    @Put('')
    async updateUser() {
        
    }
}