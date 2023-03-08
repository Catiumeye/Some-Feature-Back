import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateUserDTO } from "../dto/create-user.dto";
import { UserService } from "../services/user.service";
import { User } from "../user.entity";


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':id')
    async getUser(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }))
        id: number
    ) {
        return await this.userService.getUser(id);
    }

    @Post('')
    @UsePipes(ValidationPipe)
    async createUser(
        @Body() body: CreateUserDTO
    ) {
        return await this.userService.createUser(body)
    }

    @Put('')
    async updateUser() {
        
    }
}