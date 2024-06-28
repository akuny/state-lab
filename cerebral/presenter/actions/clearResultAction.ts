import { state } from '../app.cerebral';
import { ActionProps } from '..';

export const clearResultAction = ({ props, store }: ActionProps) => {
  store.set(state.magicWordResult, '');
};
