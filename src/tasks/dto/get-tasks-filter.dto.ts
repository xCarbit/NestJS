/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { TaskStatus } from "../tasks.model";

export class GetTasksFilterDto {
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;
    
    @IsOptional()
    @IsNotEmpty()
    search?: string;
}