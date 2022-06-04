import { FormControl, InputLabel } from '@mui/material'
import { useState } from 'react'
import { BootstrapInput } from './styles'

interface Props {
  name: string
  label: string
  value: string
  onChange?: (e: any) => void
}

const Input = ({ name, label, value, onChange }: Props) => {
  const [userInput, setUserInput] = useState(value)

  return (
    <FormControl variant="standard" style={{ width: '100%' }}>
      <InputLabel shrink htmlFor={name}>
        {label}
      </InputLabel>
      <BootstrapInput
        fullWidth
        value={userInput}
        id={name}
        name={name}
        onChange={e => {
          setUserInput(e.target.value)
          if (onChange !== undefined) {
            onChange(e)
          }
        }}
        placeholder={label}
      />
    </FormControl>
  )
}

export default Input
