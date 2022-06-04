import { Task } from '../entities/task.entity'
import { ITaskRepository } from '../repositories/task.repository'

export class AddTaskUsecase {
  private _repository: ITaskRepository

  constructor(repository: ITaskRepository) {
    this._repository = repository
  }

  public async execute(title: string): Promise<Task> {
    return this._repository.add(new Task(0, title, false))
  }
}
