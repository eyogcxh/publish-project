
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import rootReducer from './rootReducer';

// Конфигурация Redux хранилища
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Игнорируем определенные пути в экшенах и стейте для несериализуемых данных
        ignoredActions: ['auth/login/fulfilled'],
        ignoredPaths: ['auth.user.token'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

// Типизация для useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Типизация для useSelector
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;