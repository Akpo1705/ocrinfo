// src/features/menu/MenuSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuItem } from './MenuTypes';

interface MenuState {
  items: MenuItem[];
}

const initialState: MenuState = {
  items: [],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuItems(state, action: PayloadAction<MenuItem[]>) {
      state.items = action.payload;
    },
  },
});

export const { setMenuItems } = menuSlice.actions;
export default menuSlice.reducer;
