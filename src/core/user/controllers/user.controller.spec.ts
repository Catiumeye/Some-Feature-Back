import { UserController } from "./user.controller";
import { UserService } from "../services/user.service";
import { User } from "../user.entity";
import { EntityManager, Repository } from "typeorm";
import { Test, TestingModule } from "@nestjs/testing";
import { CommonModule } from "../../../common/common.module";
import { getRepositoryToken, TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "../../post/post.entity";


describe('User controller', () => {
    let userController: UserController;
    let userService: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [CommonModule],
            providers: [
                UserService,
                {
                    provide: getRepositoryToken(User),
                    useValue: {
                        save: jest.fn(),
                        findOneBy: jest.fn(),
                        findAndCount: jest.fn(),
                    }
                }
        ],
        }).compile();
        
        userService = module.get<UserService>(UserService);
    })

    it('should be defined', () => {
        expect(userService).toBeDefined();
    })


})