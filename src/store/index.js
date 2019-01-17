import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import Reducers from "../reducers";

import Reactotron from "./ReactotronConfig" // Comment to publish app

if (__DEV__) {
    var store = Reactotron.createStore(Reducers, applyMiddleware(ReduxThunk));
} else {
    var store = createStore(Reducers, applyMiddleware(ReduxThunk));
}

export default store;