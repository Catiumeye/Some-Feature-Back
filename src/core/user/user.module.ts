import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommonModule } from "src/common/common.module";
import { Post } from "../post/post.entity";
import { UserController } from "./controllers/user.controller";
import { UserService } from "./services/user.service";
import { User } from "./user.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([User, Post]),
        CommonModule,
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: []
})
export class UserModule {}