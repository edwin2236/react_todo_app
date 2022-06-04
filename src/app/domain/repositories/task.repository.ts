import { Task } from '../entities/task.entity'

export interface ITaskRepository {
  getAll(): Promise<Task[]>
  add(task: Task): Promise<Task>
  remove(task: Task): Promise<void>
  toggleState(task: Task): Promise<void>
}
