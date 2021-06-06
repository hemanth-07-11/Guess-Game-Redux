import { SETUP_GAME, MAKE_GUESS, START_NEW_GAME } from './types';

export const setupGame = options => {
  return {
    type: SETUP_GAME,
    payload: options
  };
};

export const startNewGame = () => {
  return {
    type: START_NEW_GAME,
    payload: null
  };
};

export const makeGuess = letterGuessed => {
  return {
    type: MAKE_GUESS,
    payload: letterGuessed
  };
};
