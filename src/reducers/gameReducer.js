import { SETUP_GAME, MAKE_GUESS, START_NEW_GAME } from '../actions/types';

const initialState = {
  wordToGuess: '',
  numberOfGuesses: 6,
  isPlaying: false,
  hasWinner: false,
  gameOver: false,
  lettersGuessed: ['']
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_NEW_GAME: {
      return initialState;
    }

    case SETUP_GAME: {
      return {
        ...state,
        wordToGuess: action.payload.wordToGuess.trim().toUpperCase(),
        numberOfGuesses: action.payload.numberOfGuesses,
        isPlaying: true
      };
    }

    case MAKE_GUESS: {
      const letter = action.payload;
      const { wordToGuess } = state;
      let { numberOfGuesses } = state;
      let lettersGuessed = [...state.lettersGuessed, letter];

  
      if (wordToGuess.split('').indexOf(letter) < 0) {
        numberOfGuesses--;
      }
     
      let hasWinner = true;
      wordToGuess.split('').map(letter => {
        if (letter !== ' ' && lettersGuessed.indexOf(letter) < 0) {
          hasWinner = false;
        }

        return null;
      });

      const gameOver = hasWinner || numberOfGuesses <= 0;

      return {
        ...state,
        lettersGuessed,
        numberOfGuesses,
        gameOver,
        hasWinner
      };
    }

    default:
      return state;
  }
}
