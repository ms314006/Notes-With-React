import { createStore } from 'redux';
import reducer from '../reducer/notes';

const store = createStore(reducer);

window.store = store;

export default store;
