import { Grid } from '@mui/material'
import Header from '../../components/header'
import TodoForm from './components/todoForm'
import TodoList from './containers/todoList'

const TodoPage = () => {
  return (
    <>
      <Header />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={6}>
          <TodoForm />
          <TodoList />
        </Grid>
      </Grid>
    </>
  )
}

export default TodoPage
