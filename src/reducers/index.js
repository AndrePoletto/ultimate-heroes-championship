import { firstHeroReducer } from './firstHeroReducer';
import { secondHeroReducer } from './secondHeroReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    firstHero: firstHeroReducer,
    secondHero: secondHeroReducer
});