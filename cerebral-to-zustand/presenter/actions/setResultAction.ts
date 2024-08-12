import { state } from '../app.cerebral';
import { ActionProps } from '..';

export const setResultAction = ({ props, store }: ActionProps) => {
  store.set(state.magicWordResult, props.message);
};
