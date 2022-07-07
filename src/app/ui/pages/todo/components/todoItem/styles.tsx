import styled from 'styled-components'

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 0.375em;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  margin-bottom: 15px;
`

export const CardContent = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 1rem;
  width: calc(100% - 2rem);
`

export const Button = styled.button`
  align-items: center;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  pointer-events: auto;
  width: 32px;
  color: #8b8888;

  & span {
    font-size: 20px;
  }

  &:hover {
    background-color: rgba(10, 10, 10, 0.3);
  }
`
