import { Task } from '../entities/task.entity'
import { ITaskRepository } from '../repositories/task.repository'

export class DeleteTaskUsecase {
  private _repository: ITaskRepository

  constructor(repository: ITaskRepository) {
    this._repository = repository
  }

  public async execute(task: Task): Promise<void> {
    await this._repository.remove(task)
  }
}
