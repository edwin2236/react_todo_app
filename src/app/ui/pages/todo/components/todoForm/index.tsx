import { Grid } from '@mui/material'
import { useState } from 'react'
import { addTask } from 'src/app/domain/redux/task/taskSlice'
import { AddTaskUsecase } from 'src/app/domain/usecases/addTask.usecase'
import Input from 'src/app/ui/components/input'
import { useAppDispatch } from 'src/app/ui/hooks/hooks'
import container from 'src/inversify.config'
import { BtnAdd, Form, InputGroup } from '../../styled-components/styles'

const TodoForm = () => {
  const dispatch = useAppDispatch()
  const useCase: AddTaskUsecase = new AddTaskUsecase(
    container.get('ITaskRepository')
  )
  const [form, setForm] = useState({
    title: '',
  })

  const onChange = (e: any) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()

    if (form.title !== '') {
      await useCase.execute(form.title).then(response => {
        setForm({ title: '' })
        dispatch(addTask(response))
      })
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <InputGroup>
          <Input
            label="Write new todo"
            name="title"
            value={form.title}
            onChange={onChange}
          />
        </InputGroup>
        <BtnAdd type="submit">
          <span className="material-symbols-outlined">save</span>
        </BtnAdd>
      </Grid>
    </Form>
  )
}

export default TodoForm
