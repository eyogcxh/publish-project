import { combineReducers } from '@reduxjs/toolkit';

// Будем импортировать редьюсеры из модулей
// Вначале определим пустые редьюсеры, которые потом заменим на реальные
import authReducer from '@/modules/auth/store/authSlice';
import dashboardReducer from '@/modules/dashboard/store/dashboardSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  // Добавляйте другие редьюсеры здесь по мере создания модулей
});

export default rootReducer;