/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[]{
    const {status, search} = filterDto;

   let tasksLoc=this.getAllTasks();
   if(status){
        tasksLoc=tasksLoc.filter((taskPar)=> taskPar.status===status);
   }
   if(search){
    tasksLoc=tasksLoc.filter((task)=> {
      if(task.title.includes(search) || task.description.includes(search)) return true;
      else return false;
    })
     
   }
  return tasksLoc;
  }

  deleteTaskById(id: string) {
    const index = this.tasks.findIndex((task) => task.id == id);
    if (index != -1) {
      this.tasks.splice(index, 1);
      return 0;
    }
    return -1;
  }
  updateTaskById(id: string, newStatus: TaskStatus): Task {
    const index = this.tasks.findIndex((task) => task.id == id);
    this.tasks[index].status = newStatus;
    return this.tasks[index];


  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);

    return task;

  }

}
