import { checkMagicWordAction } from '../actions/checkMagicWordAction';
import { clearResultAction } from '../actions/clearResultAction';
import { clearValidationErrorsAction } from '../actions/clearValidationErrorsAction';
import { setResultAction } from '../actions/setResultAction';
import { setValidationErrorsAction } from '../actions/setValidationErrorsAction';
import { validateMagicWordAction } from '../actions/validateMagicWordAction';

export const submitMagicWordSequence = [
  clearResultAction,
  clearValidationErrorsAction,
  validateMagicWordAction,
  {
    error: [setValidationErrorsAction],
    success: [checkMagicWordAction, setResultAction],
  },
];


