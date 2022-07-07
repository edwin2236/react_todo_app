import Checkbox from 'src/app/ui/components/checkbox'
import { Button, Card, CardContent } from './styles'

interface Props {
  title: string
  isCompleted: boolean
  onDelete: () => void
  toggleChecked: () => void
}

const TodoItem = ({ title, isCompleted, onDelete, toggleChecked }: Props) => {
  return (
    <Card>
      <CardContent>
        <Checkbox
          checked={isCompleted}
          onChange={toggleChecked}
          label={title}
        />
        <Button aria-label="delete" onClick={onDelete}>
          <span className="material-symbols-outlined">close</span>
        </Button>
      </CardContent>
    </Card>
  )
}

export default TodoItem
