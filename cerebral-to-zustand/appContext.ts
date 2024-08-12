import { fetchRealMagicWord } from '../shared/api';

export const appContext = {
  fetchRealMagicWord,
};

export type ClientAppContext = typeof appContext;
