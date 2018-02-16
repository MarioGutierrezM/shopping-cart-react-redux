import { createLogger } from 'redux-logger'
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import cartReducer from "./reducers/cartReducer";

// const loggers = createLogger({
//     collapsed: (getState, action, logEntry) => !logEntry.error,
//     duration: true
// });

export default createStore(
    combineReducers({
        cartReducer
    }),
    {},
    applyMiddleware(logger, thunk, promise())
);