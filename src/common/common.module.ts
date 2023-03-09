import { Module } from "@nestjs/common";
import { PasswordService } from "./services/password.service";



@Module({
    imports: [],
    controllers: [],
    providers: [PasswordService],
    exports: [PasswordService]
})
export class CommonModule {}