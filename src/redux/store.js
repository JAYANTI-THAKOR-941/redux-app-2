import {createStore} from 'redux'
import reducer from "./countReducer";

const store = createStore(reducer);

export default store;