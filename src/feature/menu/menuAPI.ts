// src/features/menu/MenuAPI.ts
import axios from 'axios';
import { MenuItem } from './MenuTypes';

const API_URL = 'https://api.example.com/menu';

export const fetchMenuItems = async (): Promise<MenuItem[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
