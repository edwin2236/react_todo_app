import '@testing-library/jest-dom'
import { render, screen, userEvent } from 'src/tests/test-utils'
import InputField from './index'

it('should create an instance', () => {
  render(<InputField name="test" label="email" type="email" />)

  expect(screen.getByText('email')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('email')).toBeInTheDocument()
})

it('should change input value', async () => {
  render(<InputField name="test" label="email" />)
  const user = userEvent.setup()

  const input = screen.getByPlaceholderText('email')
  expect(input).toBeInTheDocument()
  await user.type(input, 'new task')

  expect(input).toHaveValue('new task')
})

it('should show error message', async () => {
  render(<InputField name="test" label="email" error="error" />)

  const input = screen.getByPlaceholderText('email')
  expect(input).toBeInTheDocument()
  expect(screen.getByText('error')).toBeInTheDocument()
})
