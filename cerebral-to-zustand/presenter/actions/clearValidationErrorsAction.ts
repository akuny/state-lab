import { state } from '../app.cerebral';
import { ActionProps } from '..';

export const clearValidationErrorsAction = ({ props, store }: ActionProps) => {
  store.set(state.validationErrors, {});
};
