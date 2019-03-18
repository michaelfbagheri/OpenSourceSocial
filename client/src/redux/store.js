import { createStore, combineReducers } from 'redux';

import username from './reducers/username';

const initialState = {
  username: '',
  todos: [
    { id: 1, text: 'setup redux', complete: false },
    { id: 2, complete: false, text: 'sssss' }
  ]
};

const reducers = combineReducers({
  username,
  todos: (state = initialState.todos, action) => {

    if (action.type === 'TOGGLE_COMPLETE') {

      return state.map(todo => {
        return {
          ...todo,
          complete: todo.id === action.payload.todoId ? !todo.complete : todo.complete,
        };
      });
    }

    if (action.type === 'CLEAR_LIST') {
      return [];
    }

    return state;
  }
});


const store = createStore(reducers);

window.store = store;
export default store;