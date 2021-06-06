import React from 'react';

export default ({ letter, disabled, makeGuess }) => {
  return (
    <div className="col s3 m2 l1">
      <button
        onClick={() => {
          makeGuess(letter);
        }}
        className="waves-effect waves-light btn letter-btn"
        disabled={disabled}
      >
        {letter}
      </button>
    </div>
  );
};
