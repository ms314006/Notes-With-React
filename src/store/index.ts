import { createStore } from 'redux';
import reducer from '../reducer/notes';

const store = createStore(reducer);

export default store;
