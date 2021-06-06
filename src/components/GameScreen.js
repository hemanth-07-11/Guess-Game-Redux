import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { alphabet } from '../utils/constants';
import LetterButton from './LetterButton';

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  componentWillMount() {
    this.wordToGuessArray = this.props.wordToGuess.split('');
    document.addEventListener('keydown', this._handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._handleKeyDown);
  }

  _handleKeyDown(event) {
    const { keyCode } = event;
    const { lettersGuessed } = this.props;
    const letter = String.fromCharCode(keyCode);

    if (keyCode >= 65 && keyCode <= 90 && lettersGuessed.indexOf(letter) < 0) {
      this.props.makeGuess(letter);
    }
  }

  renderLetterButtons() {
    const { makeGuess, lettersGuessed } = this.props;

    return alphabet.map(letter => {
      let hasBeenGuessed = lettersGuessed.indexOf(letter) >= 0;

      return (
        <LetterButton
          letter={letter}
          key={letter}
          disabled={hasBeenGuessed}
          makeGuess={makeGuess}
        />
      );
    });
  }

  renderWordTiles() {
    const { lettersGuessed } = this.props;
    return this.wordToGuessArray.map((letter, index) => {
      let returnChar = letter;

      if (lettersGuessed.indexOf(letter) < 0 && letter !== ' ') {
        returnChar = '_';
      }

      return (
        <span
          className="word-tile"
          key={index}
          style={letter === ' ' ? { visibility: 'hidden' } : {}}
        >
          {returnChar}
        </span>
      );
    });
  }

  render() {
    const { numberOfGuesses } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="word-tile-wrap">{this.renderWordTiles()}</div>
          </div>
        </div>
        <div className="row">
          <div className="col s12" style={{ textAlign: 'center' }}>
            <strong>Guesses left: </strong>
            <div
              className="btn"
              style={numberOfGuesses <= 3 ? { backgroundColor: 'red' } : {}}
            >
              {numberOfGuesses}
            </div>
          </div>
        </div>
        <div className="row">{this.renderLetterButtons()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    numberOfGuesses: state.game.numberOfGuesses,
    wordToGuess: state.game.wordToGuess,
    lettersGuessed: state.game.lettersGuessed
  };
}

export default connect(
  mapStateToProps,
  actions
)(GameScreen);
