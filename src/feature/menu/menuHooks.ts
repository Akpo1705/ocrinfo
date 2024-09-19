// src/features/menu/MenuHooks.ts
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { setMenuItems } from './MenuSlice';
import { fetchMenuItems } from './MenuAPI';

export const useMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const menuItems = useSelector((state: RootState) => state.menu.items);

  const loadMenuItems = async () => {
    const items = await fetchMenuItems();
    dispatch(setMenuItems(items));
  };

  return { menuItems, loadMenuItems };
};
