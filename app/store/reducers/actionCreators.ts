import { AppDispatch } from "../store";
import { themeSlice } from "./themeSlice";
import uniqid from 'uniqid';

export const changeTheme = (theme: string) => (dispatch: AppDispatch) => {
  const jwtKey = 'color-theme'
  localStorage.setItem(jwtKey, theme)
  dispatch(themeSlice.actions.changeTheme(theme))
}