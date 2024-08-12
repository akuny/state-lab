import React from 'react';
import { connect } from '../presenter';
import { sequences, state } from '../presenter/app.cerebral';
import { sequences as zustandSequences } from '../presenter/store'; 
import { useStore } from '../presenter/store';
import { magicWordFormHelper } from '../presenter/computeds/magicWordFormHelper';

export const MagicWordForm = connect(
  {
    // form: state.form,
    // magicWordFormHelper: state.magicWordFormHelper,
    magicWordResult: state.magicWordResult,
    resetMagicWordFormSequence: sequences.resetMagicWordFormSequence,
    submitMagicWordSequence: sequences.submitMagicWordSequence,
    // updateFormValueSequence: sequences.updateFormValueSequence,
    validationErrors: state.validationErrors,
  },
  function MagicWordForm({
    // form,
    // magicWordFormHelper,
    magicWordResult,
    resetMagicWordFormSequence,
    submitMagicWordSequence,
    // updateFormValueSequence,
    validationErrors,
  }) {
    const updateFormValueSequence = zustandSequences.updateFormValueSequence;
    const form = useStore(state => state.form)

    return (
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          submitMagicWordSequence();
        }}
      >
        <label htmlFor="magicWord">Guess the magic word:</label>
        <input
          id="magicWord"
          name="magicWord"
          type="text"
          value={form.magicWord || ''}
          onChange={(e) => {
            updateFormValueSequence({
              key: e.target.name,
              value: e.target.value,
            });
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

        <button type="submit" disabled={!magicWordFormHelper().canSubmit}>
          Submit
        </button>

        <button
          style={{ marginLeft: '10px' }}
          onClick={(e) => {
            e.preventDefault();
            resetMagicWordFormSequence();
          }}
        >
          Reset
        </button>
      </form>
    );
  }
);
