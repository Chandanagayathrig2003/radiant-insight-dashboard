
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';
import newsReducer from './slices/newsSlice';
import financeReducer from './slices/financeSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    news: newsReducer,
    finance: financeReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
