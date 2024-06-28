import { clearFormAction } from '../actions/clearFormAction';
import { clearResultAction } from '../actions/clearResultAction';
import { clearValidationErrorsAction } from '../actions/clearValidationErrorsAction';

export const resetMagicWordFormSequence = [
  clearResultAction,
  clearValidationErrorsAction,
  clearFormAction,
];
