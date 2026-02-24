import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizResult {
  protocolSlug: string;
  score: number;
  total: number;
  answers: Record<number, string>;
  completedAt: string;
}

interface QuizState {
  results: Record<string, QuizResult>;
  completedLessons: string[];
}

const loadState = (): QuizState => {
  try {
    const saved = localStorage.getItem('quiz_state');
    if (saved) return JSON.parse(saved);
  } catch {}
  return { results: {}, completedLessons: [] };
};

const initialState: QuizState = loadState();

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    submitQuizResult(state, action: PayloadAction<QuizResult>) {
      const { protocolSlug } = action.payload;
      state.results[protocolSlug] = action.payload;
      if (!state.completedLessons.includes(protocolSlug)) {
        state.completedLessons.push(protocolSlug);
      }
      localStorage.setItem('quiz_state', JSON.stringify(state));
    },
    resetQuiz(state, action: PayloadAction<string>) {
      delete state.results[action.payload];
      state.completedLessons = state.completedLessons.filter(s => s !== action.payload);
      localStorage.setItem('quiz_state', JSON.stringify(state));
    },
    resetAllProgress(state) {
      state.results = {};
      state.completedLessons = [];
      localStorage.removeItem('quiz_state');
    },
  },
});

export const { submitQuizResult, resetQuiz, resetAllProgress } = quizSlice.actions;
export default quizSlice.reducer;
