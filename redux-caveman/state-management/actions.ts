// Constants to avoid using magic strings throughout
export const SET_FORM = 'SET_FORM';
export const SET_MAGIC_WORD_RESULT = 'SET_MAGIC_WORD_RESULT';
export const SET_VALIDATION_ERRORS = 'SET_VALIDATION_ERRORS';
export const RESET_FORM = 'RESET_FORM';

// Individual action types: plain objects with "type" and "payload" properties
// that adhere to the "Flux Standard Action" conventions described here:
// https://github.com/redux-utilities/flux-standard-action
export type SetFormAction = {
  type: typeof SET_FORM;
  payload: { [key: string]: any };
};

export type SetMagicWordResultAction = {
  type: typeof SET_MAGIC_WORD_RESULT;
  payload: string;
};

export type SetValidationErrorsAction = {
  type: typeof SET_VALIDATION_ERRORS;
  payload: { [key: string]: string };
};

export type ResetFormAction = {
  type: typeof RESET_FORM;
};

// Union type for actions
export type ActionTypes =
  | SetFormAction
  | SetMagicWordResultAction
  | SetValidationErrorsAction
  | ResetFormAction;

// Action creators: plain functions that take an argument, bundle it into an
// action object as its payload, and then return the action object. This
// action object can then be dispatched to the Redux store to trigger state
// changes. (e.g., `store.dispatch(resetForm());`)
export const setForm = (form: { [key: string]: any }): ActionTypes => ({
  type: SET_FORM,
  payload: form,
});

export const setMagicWordResult = (result: string): ActionTypes => ({
  type: SET_MAGIC_WORD_RESULT,
  payload: result,
});

export const setValidationErrors = (errors: {
  [key: string]: string;
}): ActionTypes => ({
  type: SET_VALIDATION_ERRORS,
  payload: errors,
});

export const resetForm = (): ActionTypes => ({
  type: RESET_FORM,
});
