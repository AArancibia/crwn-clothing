import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const environment = process.env.NODE_ENV || "development";
const middlewares = [];

if (environment === "development") {
  middlewares.push(logger);
}

console.log(environment);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
