import { createStore ,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./reducers";
const initialState = {}

const middleware = [ thunk ]

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middleware),
      );
    const store = createStore(
        rootreducer ,initialState,enhancer
    );

export  default store

