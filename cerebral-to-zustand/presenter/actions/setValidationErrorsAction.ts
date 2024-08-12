import { state } from '../app.cerebral';
import { ActionProps } from '..';

export const setValidationErrorsAction = ({ props, store }: ActionProps) => {
  store.set(state.validationErrors, props.errors);
};
