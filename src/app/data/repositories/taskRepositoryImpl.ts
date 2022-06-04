import { injectable } from 'inversify'
import 'reflect-metadata'
import { Task } from 'src/app/domain/entities/task.entity'
import { ITaskRepository } from 'src/app/domain/repositories/task.repository'
import { fromJsonToListTaskAdapter } from '../adapters/fromJsonToListTask.adapter'
import { TaskApi } from '../api/task.api'

@injectable()
export class TaskRepositoryImpl implements ITaskRepository {
  private _taskService: TaskApi

  constructor() {
    this._taskService = new TaskApi()
  }

  toggleState(task: Task): Promise<void> {
    return new Promise(resolve => {
      const json = JSON.parse(localStorage.getItem('tasks') ?? '[]')
      const tasks = fromJsonToListTaskAdapter(json)
      const newTasks = tasks.map(t => {
        if (t.id === task.id) {
          t.completed = !t.completed
        }
        return t
      })
      localStorage.setItem('tasks', JSON.stringify(newTasks))
      resolve()
    })
  }

  public async getAll(): Promise<Task[]> {
    const tasks = await this._taskService.findAll()
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return tasks
  }

  public add(task: Task): Promise<Task> {
    return new Promise(resolve => {
      const json = JSON.parse(localStorage.getItem('tasks') ?? '[]')
      const tasks = fromJsonToListTaskAdapter(json)
      task.id = Math.max(...tasks.map(t => t.id)) + 1
      tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(tasks))
      resolve(task)
    })
  }

  public remove(task: Task): Promise<void> {
    return new Promise(resolve => {
      const json = JSON.parse(localStorage.getItem('tasks') ?? '[]')
      const tasks = fromJsonToListTaskAdapter(json)
      const taskIndex = tasks.indexOf(task)
      tasks.splice(taskIndex, 1)
      localStorage.setItem('tasks', JSON.stringify(tasks))
      resolve()
    })
  }
}
