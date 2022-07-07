import Header from '../../components/header'
import TodoForm from './components/todoForm'
import TodoList from './containers/todoList'
import { Container, Grid } from './styled-components/styles'

const TodoPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Grid>
          <TodoForm />
          <TodoList />
        </Grid>
      </Container>
    </>
  )
}

export default TodoPage
