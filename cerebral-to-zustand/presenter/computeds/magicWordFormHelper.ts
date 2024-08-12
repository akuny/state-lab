import { Get } from 'cerebral';
import { state } from '../app.cerebral';
import { ClientAppContext } from '../../appContext';
import { useStore } from '../store';

export const magicWordFormHelper_cerebral = (
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

export const magicWordFormHelper = (): 
{
  canSubmit: boolean;
} => {
  const form = useStore(state => state.form);

  const canSubmit =
    typeof form.magicWord === 'string' && form.magicWord.length > 0;

  return {
    canSubmit,
  };
}
