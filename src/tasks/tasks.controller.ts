/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

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
    return this.tasksService.getTaskById(id);
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

  @Patch('/updateTask/:id')
  updateStatusById(@Param('id')id: string, @Body('status') newStatus: TaskStatus): Task {
    return this.tasksService.updateTaskById(id,newStatus);
  }

}
