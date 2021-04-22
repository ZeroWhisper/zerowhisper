import { combineReducers } from 'redux';

// import appGlobal from './appglobal/reducer';
// import yt from './yt/reducer';
// import geek from './geek/reducer';

const rootReducer = combineReducers({
  // yt,
  // geek,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
