/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
@Injectable()
export class TasksService {
  
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
  }
  //constructor(@InjectRepository(TasksRepository)private tasksRepository: TasksRepository){}
  
  // async getTaskById(id: string): Promise<Task>  {
  //       const found= await this.tasksRepository.findOne( {where: {id}}); // null ako nije pronadjeno nista
  //       if(!found){
  //         throw new NotFoundException(`Task with ID "${id}" not found`);
  //       }
  //       return found;
  // }
//  getAllTasks(): Task[] {
//     return this.tasks;
//   }

  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[]{
  //   const {status, search} = filterDto;

  //  let tasksLoc=this.getAllTasks();
  //  if(status){
  //       tasksLoc=tasksLoc.filter((taskPar)=> taskPar.status===status);
  //  }
  //  if(search){
  //   tasksLoc=tasksLoc.filter((task)=> {
  //     if(task.title.includes(search) || task.description.includes(search)) return true;
  //     else return false;
  //   })
     
  //  }
  // return tasksLoc;
  // }

  // deleteTaskById(id: string) {
  //   const index = this.tasks.findIndex((task) => task.id == id);
  //   if (index != -1) {
  //     this.tasks.splice(index, 1);
  //     return 0;
  //   }
  //   return -1;
  // }
  // updateTaskById(dto: UpdateTaskDto): Task {
  //   const {id, status } = dto;
  //   const index = this.tasks.findIndex((task) => task.id == id);
  //   this.tasks[index].status = status;
  //   return this.tasks[index];

  // }

  // getTaskById(id: string): Task | undefined {
  //   return this.tasks.find((task) => task.id === id);
  // }

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;

  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);

  //   return task;

  // }

}
