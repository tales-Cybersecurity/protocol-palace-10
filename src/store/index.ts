import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './slices/quizSlice';
import finalTestReducer from './slices/finalTestSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    finalTest: finalTestReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
