import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Locale = 'en' | 'fr' | 'pt-BR';

interface UiState {
  locale: Locale;
}

const loadState = (): UiState => {
  try {
    const saved = localStorage.getItem('ui_state');
    if (saved) return JSON.parse(saved);
  } catch {}
  return { locale: 'en' };
};

const initialState: UiState = loadState();

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<Locale>) {
      state.locale = action.payload;
      localStorage.setItem('ui_state', JSON.stringify(state));
    },
  },
});

export const { setLocale } = uiSlice.actions;
export default uiSlice.reducer;
