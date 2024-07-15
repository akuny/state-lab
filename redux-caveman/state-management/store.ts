import { reducer } from './reducers';

/*
 * Note that merely importing `createStore` below is flagged as deprecated in
 * VS Code with the instructions that "You should not be using the redux core
 * package by itself today, except for learning purposes. The createStore method
 * from the core redux package will not be removed, but we encourage all users
 * to migrate to using Redux Toolkit for all Redux code."
 */
import { createStore } from 'redux';

export type State = {
  form: { [key: string]: any };
  magicWordResult: string;
  validationErrors: { [key: string]: string };
};

export const initialState: State = {
  form: {},
  magicWordResult: '',
  validationErrors: {},
};

// Lets us dispatch actions as described above: `store.dispatch(resetForm());`
// We will use this store exclusively in our event handlers
export const store = createStore(reducer);

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
