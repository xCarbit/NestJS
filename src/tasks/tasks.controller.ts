/* eslint-disable prettier/prettier */
import { Body, Controller,  Get, Param,  } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto ): Task[] {

  //   if(Object.keys(filterDto).length) {
  //           return this.tasksService.getTasksWithFilters(filterDto);
  //   }
  //   else {
  //      return this.tasksService.getAllTasks();
  //   }
    
  // }

  @Get('/getTask/:id')
  getTaskById(@Param('id') id: string): Promise<Task>{
    const found = this.tasksService.getTaskById(id);
    return found;
  }

  //   if(!found){throw new NotFoundException(`Task with ID "${id}" not found`);}
  //   else {return found;}
  // }

  // @Delete('/deleteTask/id')
  // deleteTaskById(@Param('id')id: string): number
  // {
  //   return this.tasksService.deleteTaskById(id);
  // }

  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Task{
  // return this.tasksService.createTask(createTaskDto);
  // }

  // @Patch('/updateTask')
  // updateStatusById(@Body() dto: UpdateTaskDto): Task {
  //   return this.tasksService.updateTaskById(dto);
  // }

}
