import { magicWordFormHelper_cerebral } from './computeds/magicWordFormHelper';

export const initialState = {
  form: {} as any,
  magicWordFormHelper: magicWordFormHelper_cerebral as unknown as ReturnType<
    typeof magicWordFormHelper_cerebral
  >,
  magicWordResult: '' as string,
  validationErrors: {} as any,
};

export type ClientState = typeof initialState;
