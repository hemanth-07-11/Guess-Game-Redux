import React from 'react';

export default ({ winOrLose, wordToGuess }) => {
  return (
    <div>
      <div className="outcome-msg">You {winOrLose}!</div>
      <div>
        The word was: <strong>{wordToGuess}</strong>
      </div>
    </div>
  );
};
