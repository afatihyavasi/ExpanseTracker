export type User = {
   message: string;
   username: string;
   email: string;
   full_name: string;
   token: string;
};

export type UserState = {
   data: User;
   isLoading: boolean;
   error: string;
};

type LOGIN_START = {
   type: 'LOGIN_START';
};

type LOGIN_SUCCESS = {
   type: 'LOGIN_SUCCESS';
   payload: User;
};

type LOGIN_ERROR = {
   type: 'LOGIN_ERROR';
   payload: string;
};

export type UserActions = LOGIN_START | LOGIN_SUCCESS | LOGIN_ERROR;
