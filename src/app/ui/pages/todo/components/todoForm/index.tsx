import { createRef, useState } from 'react'
import { addTask } from 'src/app/domain/redux/task/taskSlice'
import { AddTaskUsecase } from 'src/app/domain/usecases/addTask.usecase'
import InputField from 'src/app/ui/components/input'
import { useAppDispatch } from 'src/app/ui/hooks/hooks'
import container from 'src/inversify.config'
import { Button, Form } from './styles'

const TodoForm = () => {
  const [error, setError] = useState('')
  const formRef = createRef<HTMLFormElement>()
  const dispatch = useAppDispatch()
  const useCase: AddTaskUsecase = new AddTaskUsecase(
    container.get('ITaskRepository')
  )

  const onSubmit = async (e: any) => {
    e.preventDefault()

    if (e.target.title?.value !== '' && e.target.title) {
      await useCase.execute(e.target.title.value.trim()).then(response => {
        console.log(formRef.current)

        formRef.current?.reset()
        dispatch(addTask(response))
        setError('')
      })
    } else {
      setError('This field is required')
    }
  }

  return (
    <Form onSubmit={onSubmit} ref={formRef}>
      <InputField label="Write new todo" name="title" error={error} />
      <Button type="submit">Add</Button>
    </Form>
  )
}

export default TodoForm
