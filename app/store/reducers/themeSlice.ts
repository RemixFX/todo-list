import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: 'dark'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    },
  }
})