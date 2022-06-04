import { Task } from 'src/app/domain/entities/task.entity'

export const fromJsonToListTaskAdapter = (jsonList: any): Task[] => {
  return jsonList.map((jsonTask: any) => {
    return new Task(jsonTask.id, jsonTask.title, jsonTask.completed)
  })
}
