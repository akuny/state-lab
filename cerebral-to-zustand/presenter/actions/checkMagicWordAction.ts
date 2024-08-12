import { state } from '../app.cerebral';
import { ActionProps } from '..';

export const checkMagicWordAction = async ({
  appContext,
  get,
  path,
  props,
  store,
}: ActionProps) => {
  const usersMagicWord = get(state.form.magicWord);
  const realMagicWord = await appContext.fetchRealMagicWord();

  const userGuessedTheMagicWord =
    usersMagicWord.toLowerCase() === realMagicWord.toLowerCase();

  const message = userGuessedTheMagicWord
    ? 'You guessed the magic word!'
    : 'You did not guess the magic word. Try again!';

  props.message = message;
};
