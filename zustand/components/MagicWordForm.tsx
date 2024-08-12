import { useStore } from '../presenter/store';

export function MagicWordForm() {
  const guessedWord = useStore((state) => state.guessedWord)
  const validationErrors = useStore((state) => state.validationErrors)
  const isSubmitDisabled = useStore((state) => state.isSubmitDisabled)
  const udpateGuess = useStore((state) => state.updateGuess)
  const clearGuess = useStore((state) => state.clearGuess)
  const submitGuess = useStore((state) => state.submitGuess)
  const magicWordResult = useStore((state) => state.magicWordResult)
  
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        submitGuess();
      }}
    >
      <label htmlFor="magicWord">Guess the magic word:</label>
      <input
        id="magicWord"
        name="magicWord"
        type="text"
        value={guessedWord}
        onChange={(e) => {
          udpateGuess(e.target.value);
        }}
      />

      {validationErrors.magicWord && (
          <>
            <br />
            <h3>Validation Errors</h3>
            <span style={{ color: 'red' }}>{validationErrors.magicWord}</span>
          </>
        )}

      {magicWordResult && (
        <>
          <br />
          <h3>Result</h3>
          <span style={{ color: 'black' }}>{magicWordResult}</span>
        </>
      )}

      <br />
      <br />

      <button
        type="submit"
        disabled={isSubmitDisabled}
      >
        Submit
      </button>

      <button
        style={{ marginLeft: '10px' }}
        onClick={(e) => {
          e.preventDefault();
          clearGuess()
        }}
      >
        Reset
      </button>
    </form>
  );
}
