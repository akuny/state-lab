import { state } from '../app.cerebral';
import { ActionProps } from '..';

export const setFormValueAction = ({ props, store }: ActionProps) => {
  if (props.value !== '' && props.value !== null) {
    store.set(state.form[props.key], props.value);
  } else {
    store.unset(state.form[props.key]);
  }
};