import { Injectable } from '@nestjs/common';
import { Task } from '@react-full-stack/database';
import { ITask } from '@react-full-stack/models';

@Injectable()
export class TaskMapper {
  public toResponse(task: Task[]): ITask[] {
    return task.map((t) => this.toITaskResponse(t));
  }

  public toITaskResponse(task: Task): ITask {
    return {
      id: task.id,
      title: task.name,
      description: task.description,
      completed: task.completed,
    };
  }
}
