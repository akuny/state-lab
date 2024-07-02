/*
 * Note that merely importing `createStore` below is flagged as deprecated in
 * VS Code with the instructions that "You should not be using the redux core
 * package by itself today, except for learning purposes. The createStore method
 * from the core redux package will not be removed, but we encourage all users
 * to migrate to using Redux Toolkit for all Redux code."
 */
import { useCallback, useEffect, useState } from 'react';
import { createStore } from 'redux';

type State = {
  form: { [key: string]: any };
  magicWordResult: string;
  validationErrors: { [key: string]: string };
};

const initialState: State = {
  form: {},
  magicWordResult: '',
  validationErrors: {},
};

// Constants to avoid using magic strings throughout
const SET_FORM = 'SET_FORM';
const SET_MAGIC_WORD_RESULT = 'SET_MAGIC_WORD_RESULT';
const SET_VALIDATION_ERRORS = 'SET_VALIDATION_ERRORS';
const RESET_FORM = 'RESET_FORM';

// Individual action types: plain objects with "type" and "payload" properties
// that adhere to the "Flux Standard Action" conventions described here:
// https://github.com/redux-utilities/flux-standard-action
type SetFormAction = {
  type: typeof SET_FORM;
  payload: { [key: string]: any };
};

type SetMagicWordResultAction = {
  type: typeof SET_MAGIC_WORD_RESULT;
  payload: string;
};

type SetValidationErrorsAction = {
  type: typeof SET_VALIDATION_ERRORS;
  payload: { [key: string]: string };
};

type ResetFormAction = {
  type: typeof RESET_FORM;
};

// Union type for actions
type ActionTypes =
  | SetFormAction
  | SetMagicWordResultAction
  | SetValidationErrorsAction
  | ResetFormAction;

// Action creators: plain functions that take an argument, bundle it into an
// action object as its payload, and then return the action object. This
// action object can then be dispatched to the Redux store to trigger state
// changes. (e.g., `store.dispatch(resetForm());`)
const setForm = (form: { [key: string]: any }): ActionTypes => ({
  type: SET_FORM,
  payload: form,
});

const setMagicWordResult = (result: string): ActionTypes => ({
  type: SET_MAGIC_WORD_RESULT,
  payload: result,
});

const setValidationErrors = (errors: {
  [key: string]: string;
}): ActionTypes => ({
  type: SET_VALIDATION_ERRORS,
  payload: errors,
});

const resetForm = (): ActionTypes => ({
  type: RESET_FORM,
});

// Reducer: traditionally contains a switch statement to handle each action
// type. The reducer "[takes] the current state and an action as arguments, and
// return a new state result."
// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#writing-reducers
const appReducer = (state: State = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_FORM:
      return { ...state, form: { ...state.form, ...action.payload } };
    case SET_MAGIC_WORD_RESULT:
      return { ...state, magicWordResult: action.payload };
    case SET_VALIDATION_ERRORS:
      return { ...state, validationErrors: action.payload };
    case RESET_FORM:
      return { ...state, form: {}, magicWordResult: '', validationErrors: {} };
    default:
      return state;
  }
};

// Lets us dispatch actions as described above: `store.dispatch(resetForm());`
export const store = createStore(appReducer);

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
const useEventHandlers = () => {
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

// TODO start reasoning through how to dispatch actions to the Redux store
// cleanly from the MagicWordForm component.

// TODO: Where would async work go if we're using bare-bones Redux?
// Async work would typically be handled with middleware like redux-thunk.
// However, without middleware, one could handle async operations either:
//
// 1. Directly in components, or
// 2. In custom middleware to dispatch actions when async operations complete.
//
// The first option goes against the goal of separating business logic from
// components, so the second option seems more promising to explore.
