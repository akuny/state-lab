import { useCallback, useEffect, useState } from 'react';
import { State, store } from './store';
import { setForm, resetForm } from './actions';

// Custom hook that lets components use the Redux store
export const useReduxState = () => {
  const [state, setState] = useState<State>(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => unsubscribe();
  }, []);

  return state;
};

// Custom hook that lets components dispatch actions to the store without
// knowing about Redux per se
export const useEventHandlers = () => {
  const change = useCallback((name: string, value: string) => {
    store.dispatch(setForm({ [name]: value }));
  }, []);

  const reset = useCallback(() => {
    store.dispatch(resetForm());
  }, []);

  return {
    change,
    reset,
  };
};
