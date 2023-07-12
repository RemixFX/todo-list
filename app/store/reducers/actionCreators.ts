import { AppDispatch } from "../store";
import { themeSlice } from "./themeSlice";

export const changeTheme = (theme: string) => (dispatch: AppDispatch) => {
  const jwtKey = 'color-theme'
  localStorage.setItem(jwtKey, theme)
  dispatch(themeSlice.actions.changeTheme(theme))
}