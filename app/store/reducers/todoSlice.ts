import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITodoList {
  id: string;
  todo: string;
  completed: boolean;
}

interface TodoList {
  todoList: ITodoList[]
}

const initialState: TodoList = {
  todoList: [
    {
      id: 'dd4432ddw11klsa',
      todo: 'Сделать адаптивный дизайн для страницы сервисов',
      completed: false,
    },
    {
      id: 'xcc432ddw11klqa',
      todo: 'Начать писать админку',
      completed: false,
    },
    {
      id: '54432ddw11klwa',
      todo: 'Спланировать архитектуру будущей CRM',
      completed: false,
    },
    {
      id: 'bgf432ddw11klsa',
      todo: 'Подключить API WhatsApp',
      completed: false,
    },
    {
      id: 'vgf432ddw11klsa',
      todo: 'Написать хук для определния нужных дат и свободного времени для записи',
      completed: true,
    },
    {
      id: 'iu4432ddw11klsa',
      todo: 'Подключить API Яндекс карт',
      completed: false,
    },
    {
      id: 'zaq32ddw11klsa',
      todo: 'Сделать тестовое задание для Фабрики приложений',
      completed: true,
    },
  ]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodoList>) => {
      state.todoList = [...state.todoList, action.payload]
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload)
    }
  }
})