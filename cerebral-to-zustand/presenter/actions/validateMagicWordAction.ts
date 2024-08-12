import { state } from '../app.cerebral';
import { ActionProps } from '..';

export const validateMagicWordAction = async ({
  appContext,
  get,
  path,
  props,
  store,
}: ActionProps) => {
  const usersMagicWord = get(state.form.magicWord);
  const containsNumbers = /\d/.test(usersMagicWord);

  if (containsNumbers) {
    const message =
      'Your guess must not contain any numeric characters. Please try again.';

    return path.error({
      alertError: {
        title: message,
      },
      errors: {
        magicWord: message,
      },
    });
  } else {
    return path.success();
  }
};
