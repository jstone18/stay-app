import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

const middlewares = [logger, reduxPromise];

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares))
);
