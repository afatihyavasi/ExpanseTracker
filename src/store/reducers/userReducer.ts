import { UserState, UserActions, User } from '../../types/user';

const initialState: UserState = {
   data: {} as User,
   isLoading: false,
   error: '',
};

const userReducer = (state: UserState = initialState, action: UserActions) => {
   return state;
};

export default userReducer;
