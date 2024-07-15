import { State, initialState } from './store';
import {
  SET_FORM,
  SET_MAGIC_WORD_RESULT,
  SET_VALIDATION_ERRORS,
  RESET_FORM,
  ActionTypes,
} from './actions';

// Reducer: traditionally contains a switch statement to handle each action
// type. The reducer "[takes] the current state and an action as arguments, and
// return a new state result."
// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#writing-reducers
export const reducer = (state: State = initialState, action: ActionTypes) => {
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
