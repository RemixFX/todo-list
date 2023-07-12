import { AppDispatch } from "../store";
import { themeSlice } from "./themeSlice";
import uniqid from 'uniqid';
import { ITodoList, todoSlice } from "./todoSlice";

//Изменение цветоввой темы
export const changeTheme = (theme: string) => (dispatch: AppDispatch) => {
  dispatch(themeSlice.actions.changeTheme(theme))
}

//Добавление новой task
export const addTask = (task: Omit<ITodoList, 'id'>) => (dispatch: AppDispatch) => {
  const id = uniqid()
  const newTask = {...task, id: id}
  dispatch(todoSlice.actions.addTask(newTask))
}


//Изменение отметки completed у task на завершенную
export const completeTask = (id: string) => (dispatch: AppDispatch) => {
  dispatch(todoSlice.actions.completeTask(id))
}

//Удаление выбранной task
export const removeTask = (id: string) => (dispatch: AppDispatch) => {
  dispatch(todoSlice.actions.removeTask(id))
}