import initialState from './initialState';



const reducer = (state = initialState, action) => {

  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      user: action.payload
    };
  case 'LOGOUT':
    return {
      ...state,
      user: {
        authenticated: false
      }
    };
  default:
    return state;
  }
};

export default reducer;

