import React from "react";
import ReactDOM from "react-dom";
import App from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
// import * as serviceWorker from './serviceWorker'
import { createStore } from "redux";
import allReducers from "./redux/reducers";
import { Provider } from "react-redux";

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// serviceWorker.unregister();
