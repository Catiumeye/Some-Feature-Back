import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../user/user.entity";
import { PostController } from "./controllers/post.controller";
import { Post } from "./post.entity";
import { PostService } from "./services/post.service";


@Module({
    imports: [TypeOrmModule.forFeature([Post, User])],
    controllers: [PostController],
    providers: [PostService],
    exports: []
})
export class PostModule {}