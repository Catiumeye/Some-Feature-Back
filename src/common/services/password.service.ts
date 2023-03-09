import { Injectable } from "@nestjs/common";
import * as argon2 from 'argon2';

@Injectable()
export class PasswordService {

    async hash(password: string): Promise<string> {  
        return await argon2.hash(password, {
            secret: Buffer.from(process.env.ARGON_SALT)
        });
    }

    async verify(password) {

    }
}