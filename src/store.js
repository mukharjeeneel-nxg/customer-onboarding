import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { contactReducer } from './reducers/contactReducer';


const initialState = {
    
     contactSubmit : {
            contactInfo : localStorage.getItem('contactInfo') ? JSON.parse(localStorage.getItem('conatactInfo')) : [],
    },
   
};
 
const reducer = combineReducers({
 
 
  contactSubmit: contactReducer,
});

const composDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composDevTools(applyMiddleware(thunk)));

export default store;