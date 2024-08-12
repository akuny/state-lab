import { setFormValueAction } from '../actions/setFormValueAction';
import { useStore } from '../store';

export const updateFormValueSequence = ({key, value}: {key: string, value: string}) => 
  useStore.setState((state) => setFormValueAction(state, {key, value}));
