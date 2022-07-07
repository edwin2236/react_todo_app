import styled from 'styled-components'

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`

export const Input = styled.input`
  background-color: #fff;
  border-radius: 0.375em;
  border: 1px solid #dbdbdb;
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  color: #363636;
  height: 30px;
  outline: 0;
  padding: 5px;
  transition-property: color, box-shadow, border-color;
  transition: 0.1s ease-in-out;
  width: calc(100% - 10px);

  &:focus {
    border-color: #485fc7;
    box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);
    outline: 0;
  }
`

export const InputLabel = styled.label`
  color: #363636;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
`

export const ErrorMessage = styled.span`
  color: #ff0000;
  font-size: 0.8rem;
  font-weight: 600;
`
