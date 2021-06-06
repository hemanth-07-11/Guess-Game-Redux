import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewGameForm from './NewGameForm';
import GameScreen from './GameScreen';
import ResultsScreen from './ResultsScreen';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  renderScreen() {
    const { isPlaying, gameOver, hasWinner, wordToGuess } = this.props;

    if (gameOver) {
      return (
        <ResultsScreen
          wordToGuess={wordToGuess}
          winOrLose={hasWinner ? 'Win' : 'Lose'}
        />
      );
    }

    if (isPlaying) {
      return <GameScreen />;
    }

    return <NewGameForm />;
  }

  render() {
    const { isPlaying } = this.props;

    return (
      <div className="app-wrapper">
        <Header isPlaying={isPlaying} />
        <div className="container main-content">{this.renderScreen()}</div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isPlaying: state.game.isPlaying,
    gameOver: state.game.gameOver,
    hasWinner: state.game.hasWinner,
    wordToGuess: state.game.wordToGuess
  };
}

export default connect(
  mapStateToProps,
  null
)(App);
