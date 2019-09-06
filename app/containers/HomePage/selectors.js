/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );

const makeSelectSignIn = () =>
  createSelector(
    selectHome,
    homeState => homeState.name,
  );

export { selectHome, makeSelectUsername, makeSelectSignIn };



