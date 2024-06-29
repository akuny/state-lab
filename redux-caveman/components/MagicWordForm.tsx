import React from 'react';

export function MagicWordForm() {
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        // TODO submit the form
      }}
    >
      <label htmlFor="magicWord">Guess the magic word:</label>
      <input
        id="magicWord"
        name="magicWord"
        type="text"
        // TODO handle value change
        onChange={(e) => {
          //
        }}
      />

      {/* TODO display validation errors */}

      {/* TODO display results if validation passed */}

      <br />
      <br />

      <button
        type="submit"
        // TODO set disabled conditionally
      >
        Submit
      </button>

      <button
        style={{ marginLeft: '10px' }}
        onClick={(e) => {
          e.preventDefault();
          // TODO clear the form
        }}
      >
        Reset
      </button>
    </form>
  );
}
