import { ApiPropertyOptional, ApiResponseProperty } from "@nestjs/swagger";


export class BaseResult {
    @ApiResponseProperty()
    success: boolean;

    @ApiPropertyOptional()
    @ApiResponseProperty()
    message: string;

    @ApiPropertyOptional()
    @ApiResponseProperty()
    code?: number//For future
}