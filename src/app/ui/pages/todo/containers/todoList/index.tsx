import { useCallback, useEffect } from 'react'
import {
  removeTask,
  selectTasks,
  setList,
  toggleStateTask,
} from 'src/app/domain/redux/task/taskSlice'
import { DeleteTaskUsecase } from 'src/app/domain/usecases/deleteTask.usecase'
import { GetAllTasksUsecase } from 'src/app/domain/usecases/getAllTasks.usecase'
import { ToggleStateTaskUsecase } from 'src/app/domain/usecases/toggleStateTask.usecase'
import { useAppDispatch, useAppSelector } from 'src/app/ui/hooks/hooks'
import container from 'src/inversify.config'
import TodoItem from '../../components/todoItem'

const TodoList = () => {
  const tasks = useAppSelector(selectTasks)
  const dispatch = useAppDispatch()
  const getAllTasksUsecase: GetAllTasksUsecase = new GetAllTasksUsecase(
    container.get('ITaskRepository')
  )
  const deleteTaskUsecase: DeleteTaskUsecase = new DeleteTaskUsecase(
    container.get('ITaskRepository')
  )
  const toggleStateTaskUsecase: ToggleStateTaskUsecase =
    new ToggleStateTaskUsecase(container.get('ITaskRepository'))

  const taskCallback = useCallback(async () => {
    await getAllTasksUsecase.execute().then(response => {
      dispatch(setList(response))
    })
  }, [getAllTasksUsecase])

  useEffect(() => {
    taskCallback()
  }, [])

  return (
    <>
      {tasks.map(it => (
        <TodoItem
          key={it.id}
          title={it.title}
          isCompleted={it.completed}
          onDelete={function (): void {
            deleteTaskUsecase.execute(it).then(() => {
              dispatch(removeTask(it))
            })
          }}
          toggleChecked={function (): void {
            toggleStateTaskUsecase.execute(it).then(() => {
              dispatch(toggleStateTask(it))
            })
          }}
        />
      ))}
    </>
  )
}

export default TodoList
