import { Container } from 'inversify'
import 'reflect-metadata'
import { TaskRepositoryImpl } from './app/data/repositories/taskRepositoryImpl'
import { ITaskRepository } from './app/domain/repositories/task.repository'

const container = new Container()
container
  .bind<ITaskRepository>('ITaskRepository')
  .to(TaskRepositoryImpl)
  .inSingletonScope()

export default container
