import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import gameReducer from './gameReducer';

export default combineReducers({
  game: gameReducer,
  form: reduxForm
});
