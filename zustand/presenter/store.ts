import { create } from 'zustand'

type State = {
  magicWord: string;
  guessedWord: string;
  validationErrors: { magicWord?: string;};
  isSubmitDisabled: boolean;
  magicWordResult: string;
  updateGuess: (guessWord: string) => void;
  clearGuess: () => void;
  submitGuess: () => void;
  clearValidationErrors: () => void;
}

export const useStore = create<State>()((set) => ({
  magicWord: 'magic',
  guessedWord: '',
  isSubmitDisabled: true,
  magicWordResult: '',
  validationErrors: {},
  updateGuess: (guessWord: string) => set(() => ({ guessedWord: guessWord, isSubmitDisabled: !guessWord })),
  clearGuess: () => set({ guessedWord: '', isSubmitDisabled: true, validationErrors: {}}),
  clearValidationErrors: () => set({validationErrors: {}}),
  submitGuess: () => set((state) => {
    if (state.guessedWord === state.magicWord) {
      state.clearValidationErrors()
      return {magicWordResult: `Congratulations, ${state.guessedWord} is the magic word!`}
    }
    // TS gets mad if we don't return anything, so return empty
    return {
      validationErrors: {
      ...state.validationErrors,
       magicWord: `Sorry, ${state.guessedWord} was not the magic word` 
      }
    }
  })
}))