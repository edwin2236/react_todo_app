import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'src/store'
import { Task } from '../../entities/task.entity'

export interface TasksState {
  value: Task[]
}

const initialState: TasksState = {
  value: [],
}

const sortDesc = (list: Task[]): Task[] => {
  return list.sort((a: Task, b: Task) => {
    if (a.id > b.id) {
      return -1
    }
    if (a.id < b.id) {
      return 1
    }
    return 0
  })
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload)
      const list = [...state.value]
      state.value = sortDesc(list)
    },
    removeTask: (state, action) => {
      state.value = state.value.filter(task => task.id !== action.payload.id)
    },
    setList: (state, action) => {
      state.value = sortDesc(action.payload)
    },
    toggleStateTask: (state, action) => {
      state.value = state.value.map(task => {
        if (task.id === action.payload.id) {
          task.completed = !task.completed
        }
        return task
      })
    },
  },
})

export const { addTask, removeTask, setList, toggleStateTask } =
  taskSlice.actions

export const selectTasks = (state: RootState) => state.task.value

export default taskSlice.reducer
