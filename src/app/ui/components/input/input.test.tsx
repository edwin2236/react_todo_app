import '@testing-library/jest-dom'
import { render, screen, userEvent } from 'src/tests/test-utils'
import Input from './index'

describe('Input', () => {
  it('should create an instance', () => {
    render(<Input name="test" label="email" value="" />)

    expect(screen.getByText('email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('email')).toBeInTheDocument()
  })

  it('should change input value', () => {
    render(<Input name="test" label="email" value="" />)

    const input = screen.getByPlaceholderText('email')
    expect(input).toBeInTheDocument()
    userEvent.type(input, 'my value')
    expect(input).toHaveValue('my value')
  })
})
