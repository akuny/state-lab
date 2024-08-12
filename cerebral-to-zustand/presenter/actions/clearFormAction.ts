import { state } from '../app.cerebral';
import { ActionProps } from '..';

export const clearFormAction = ({ props, store }: ActionProps) => {
  store.set(state.form, {});
};
