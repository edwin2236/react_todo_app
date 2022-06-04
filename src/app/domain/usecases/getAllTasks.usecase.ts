import { Task } from '../entities/task.entity'
import { ITaskRepository } from '../repositories/task.repository'

export class GetAllTasksUsecase {
  private _repository: ITaskRepository

  constructor(repository: ITaskRepository) {
    this._repository = repository
  }

  public async execute(): Promise<Task[]> {
    return this._repository.getAll()
  }
}
