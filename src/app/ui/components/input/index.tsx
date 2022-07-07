import { ErrorMessage, FormControl, Input, InputLabel } from './styles'

interface Props {
  name: string
  label: string
  type?: string
  error?: string
}

const InputField = ({ name, label, type, error }: Props) => {
  return (
    <FormControl>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input id={name} type={type || 'text'} name={name} placeholder={label} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormControl>
  )
}

export default InputField
