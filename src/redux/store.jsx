import {createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';

const middleware = [thunk];

// if(process.env.NODE_ENV === "development"){
//     middleware.push(logger)
// }
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

