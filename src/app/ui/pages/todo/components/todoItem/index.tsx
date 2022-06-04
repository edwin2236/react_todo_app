import { Card, Checkbox, IconButton } from '@mui/material'
import { CardContent, TodoTitle } from '../../styled-components/styles'

interface Props {
  title: string
  isCompleted: boolean
  onDelete: () => void
  toggleChecked: () => void
}

const TodoItem = ({ title, isCompleted, onDelete, toggleChecked }: Props) => {
  return (
    <>
      <Card
        style={{
          backgroundColor: isCompleted ? '#e2efe5' : '#ffffff',
          boxShadow: 'rgb(61 71 82 / 20%) 0px 4px 20px',
          borderRadius: 15,
        }}
      >
        <CardContent>
          <Checkbox checked={isCompleted} onChange={toggleChecked} />
          <TodoTitle>{title}</TodoTitle>
          <IconButton aria-label="delete" size="large" onClick={onDelete}>
            <span className="material-symbols-outlined">delete</span>
          </IconButton>
        </CardContent>
      </Card>
      <br />
    </>
  )
}

export default TodoItem
