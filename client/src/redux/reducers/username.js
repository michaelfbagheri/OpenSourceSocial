
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export default (state = '', action) => {

  if (action.type === UPDATE_USERNAME) {
    return action.payload;
  }

  return state;

};
