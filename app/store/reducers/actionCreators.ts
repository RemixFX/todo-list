import { AppDispatch } from "../store";
import { themeSlice } from "./themeSlice";
import uniqid from 'uniqid';
import { ITodoList, todoSlice } from "./todoSlice";

export const changeTheme = (theme: string) => (dispatch: AppDispatch) => {
  const jwtKey = 'color-theme'
  localStorage.setItem(jwtKey, theme)
  dispatch(themeSlice.actions.changeTheme(theme))
}

export const addTask = (task: Omit<ITodoList, 'id'>) => (dispatch: AppDispatch) => {
  const id = uniqid()
  const newTask = {...task, id: id}
  dispatch(todoSlice.actions.addTask(newTask))
}

export const completeTask = (id: string) => (dispatch: AppDispatch) => {
  dispatch(todoSlice.actions.completeTask(id))
}

export const removeTask = (id: string) => (dispatch: AppDispatch) => {
  dispatch(todoSlice.actions.removeTask(id))
}