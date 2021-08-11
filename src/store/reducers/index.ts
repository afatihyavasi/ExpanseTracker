import { combineReducers } from 'redux';
import userReducer from './userReducer';
import { UserState } from '../../types/user';

type AppState = {
   user: UserState;
   categories: void;
   records: void;
};

const rootReducer = combineReducers<AppState>({
   user: userReducer,
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   categories: () => {},
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   records: () => {},
});

export default rootReducer;
