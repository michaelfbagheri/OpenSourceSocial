import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import Reducer from './reducer';




//Create the store and pass it the Reducer function being imported from Reducer.js
const store = createStore(Reducer);






export default store;

