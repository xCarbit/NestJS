/* eslint-disable prettier/prettier */

import { IsEnum } from "class-validator";
import { TaskStatus } from "../task-status";


export class UpdateTaskDto {
    id: string;
    @IsEnum(TaskStatus)
    status: TaskStatus;

}