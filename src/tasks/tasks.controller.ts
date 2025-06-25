/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto ): Task[] {

    if(Object.keys(filterDto).length) {
            return this.tasksService.getTasksWithFilters(filterDto);
    }
    else {
       return this.tasksService.getAllTasks();
    }
    
  }

  @Get('/getTask/:id')
  getTaskById(@Param('id') id: string): Task | undefined{
    const found = this.tasksService.getTaskById(id);

    if(!found){throw new NotFoundException(`Task with ID "${id}" not found`);}
    else {return found;}
  }

  @Delete('/deleteTask/id')
  deleteTaskById(@Param('id')id: string): number
  {
    return this.tasksService.deleteTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task{
  return this.tasksService.createTask(createTaskDto);
  }

  @Patch('/updateTask')
  updateStatusById(@Body() dto: UpdateTaskDto): Task {
    return this.tasksService.updateTaskById(dto);
  }

}
