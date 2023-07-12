import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITodoList {
  id: string;
  task: string;
  completed: boolean;
}

interface TodoList {
  todoList: ITodoList[]
}

const initialState: TodoList = {
  todoList: [
    {
      id: 'dd4432ddw11klsa',
      task: 'Сделать адаптивный дизайн для страницы сервисов',
      completed: false,
    },
    {
      id: 'xcc432ddw11klqa',
      task: 'Начать писать админку',
      completed: false,
    },
    {
      id: '54432ddw11klwa',
      task: 'Спланировать архитектуру будущей CRM',
      completed: false,
    },
    {
      id: 'bgf432ddw11klsa',
      task: 'Подключить API WhatsApp',
      completed: false,
    },
    {
      id: 'vgf432ddw11klsa',
      task: 'Написать хук для определния нужных дат и свободного времени для записи',
      completed: true,
    },
    {
      id: 'iu4432ddw11klsa',
      task: 'Подключить API Яндекс карт',
      completed: false,
    },
    {
      id: 'zaq32ddw11klsa',
      task: 'Сделать тестовое задание для Фабрики приложений',
      completed: true,
    },
  ]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITodoList>) => {
      state.todoList = [...state.todoList, action.payload]
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(task => task.id !== action.payload)
    },
    completeTask: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.map((item) => {
        console.log(action.payload)
        if (item.id === action.payload) {
          
          return { id: item.id, task: item.task, completed: true }
        }
        return item
        
      })
    },
  }
})