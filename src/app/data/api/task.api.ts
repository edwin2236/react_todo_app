import { Task } from 'src/app/domain/entities/task.entity'
import { fromJsonToListTaskAdapter } from '../adapters/fromJsonToListTask.adapter'

export class TaskApi {
  async findAll(): Promise<Task[]> {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => fromJsonToListTaskAdapter(json))
      .catch((error: any) => {
        console.log(error)
        throw new Error('No se encontraron tareas')
      })
  }
}
