import { magicWordFormHelper } from './computeds/magicWordFormHelper';

export const initialState = {
  form: {} as any,
  magicWordFormHelper: magicWordFormHelper as unknown as ReturnType<
    typeof magicWordFormHelper
  >,
  magicWordResult: '' as string,
  validationErrors: {} as any,
};

export type ClientState = typeof initialState;
