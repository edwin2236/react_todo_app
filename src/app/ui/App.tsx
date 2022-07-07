import { Route, Routes } from 'react-router-dom'
import TodoPage from './pages/todo'

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
    </Routes>
  )
}

export default App
