import initialState from './initialState';


const reducer = (state = initialState, action) => {
  if (action.type === 'LOGIN') {
    return {
      ...state,
      user: action.payload

    };

  }


  return state;
};

export default reducer;

