import { Get } from 'cerebral';
import { state } from '../app.cerebral';
import { ClientAppContext } from '../../appContext';

export const magicWordFormHelper = (
  get: Get,
  appContext: ClientAppContext
): any => {
  const form = get(state.form);

  const canSubmit =
    typeof form.magicWord === 'string' && form.magicWord.length > 0;

  return {
    canSubmit,
  };
};
