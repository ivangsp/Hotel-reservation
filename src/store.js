import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import AdminReducer from "./reducers/AdminReducer";
import BookingReducer from "./reducers/BookingReducer"

export default createStore(
    combineReducers({
        AdminReducer,
        BookingReducer
    }),
    {},
    applyMiddleware(logger)
);
