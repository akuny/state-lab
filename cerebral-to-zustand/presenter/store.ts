import { create } from 'zustand'
import { updateFormValueSequence } from './sequences/updateFormValueSequence';
import { magicWordFormHelper } from './computeds/magicWordFormHelper';
import { submitMagicWordSequence } from './sequences/submitMagicWordSequence';

const initialState = {
  form: {} as any,
  // magicWordFormHelper: magicWordFormHelper()
};

export type ZustandState = typeof initialState;

export const useStore = create<ZustandState>()(() => (initialState));

export const sequences = {
  updateFormValueSequence,
  submitMagicWordSequence
};