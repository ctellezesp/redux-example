import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './index';
import logger from 'redux-logger';
// create the store , the store is the section that contain all of of own reducers
const store = createStore(
    reducer, // all reducers
    compose(applyMiddleware(thunk,logger)) // logger show in console each action

);


export default store;
