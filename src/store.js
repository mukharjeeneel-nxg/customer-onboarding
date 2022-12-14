import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import {  registerReducer,billingReducer,checkUrlReducer} from './reducers/registerReducer';
import { contactReducer } from './reducers/contactReducer';


const initialState = {
    sellerRegister: {
        sellerInfo : localStorage.getItem('sellerInfo') ?JSON.parse(localStorage.getItem('sellerInfo')) : [],
    },
     contactSubmit : {
            contactInfo : localStorage.getItem('contactInfo') ? JSON.parse(localStorage.getItem('conatactInfo')) : [],
    },
   
};
 
const reducer = combineReducers({
  sellerRegister: registerReducer,
  sellerBilling: billingReducer,
  sellerUrl: checkUrlReducer,
  contactSubmit: contactReducer,
});

const composDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composDevTools(applyMiddleware(thunk)));

export default store;