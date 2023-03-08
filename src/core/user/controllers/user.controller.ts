import { Controller, Get, Param, Query } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { User } from "../user.entity";


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/:id')
    async getUser(@Param('id') id: string) {
        console.log(id);
        
        const user = await this.userService.getUser(id);
        return 'SOME USER' + user;
    }
}