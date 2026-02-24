import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TestAttempt {
  score: number;
  total: number;
  answers: Record<number, string>;
  missedTopics: string[];
  completedAt: string;
}

interface FinalTestState {
  attempts: TestAttempt[];
  currentQuestionIds: number[];
}

const loadState = (): FinalTestState => {
  try {
    const saved = localStorage.getItem('final_test_state');
    if (saved) return JSON.parse(saved);
  } catch {}
  return { attempts: [], currentQuestionIds: [] };
};

const initialState: FinalTestState = loadState();

const finalTestSlice = createSlice({
  name: 'finalTest',
  initialState,
  reducers: {
    setCurrentQuestions(state, action: PayloadAction<number[]>) {
      state.currentQuestionIds = action.payload;
      localStorage.setItem('final_test_state', JSON.stringify(state));
    },
    submitTestAttempt(state, action: PayloadAction<TestAttempt>) {
      state.attempts.push(action.payload);
      localStorage.setItem('final_test_state', JSON.stringify(state));
    },
    clearTestHistory(state) {
      state.attempts = [];
      state.currentQuestionIds = [];
      localStorage.removeItem('final_test_state');
    },
  },
});

export const { setCurrentQuestions, submitTestAttempt, clearTestHistory } = finalTestSlice.actions;
export default finalTestSlice.reducer;
