import { Label } from './styles'

interface Props {
  checked: boolean
  onChange: () => void
  label: string
}

const Checkbox = ({ checked, onChange, label }: Props) => {
  return (
    <Label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </Label>
  )
}

export default Checkbox
