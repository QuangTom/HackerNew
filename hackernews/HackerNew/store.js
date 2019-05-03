import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import allReducers from "./reducers";

const middleWare = [];

let sagaMiddleware = null;
let store = null;


  // Setup Redux-Saga
  sagaMiddleware = createSagaMiddleware();
  middleWare.push(sagaMiddleware);

  store = createStore(allReducers, {}, compose(applyMiddleware(...middleWare)));

// Initiate root saga.

sagaMiddleware.run(rootSaga);
if (module.hot) {
  module.hot.accept("./reducers", () => {
    store.replaceReducer(allReducers);
  });
}

export default store;

