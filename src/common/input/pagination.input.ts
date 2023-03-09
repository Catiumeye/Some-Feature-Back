import { ApiProperty } from "@nestjs/swagger";
import { Type, Transform } from "class-transformer";
import { IsInt, Max } from "class-validator";


export class PaginationInput {
    @ApiProperty()
    @Transform((e) => Number(e.value))
    @Max(50)
    @IsInt()
    take: number;

    @ApiProperty()
    @Transform((e) => Number(e.value))
    @IsInt()
    skip: number;
}