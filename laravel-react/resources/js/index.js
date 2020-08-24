import React from "react";
import ReactDOM from "react-dom";
import App from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
// import * as serviceWorker from './serviceWorker'
import { createStore } from "redux";
import allReducers from "./redux/reducers";
import { Provider } from "react-redux";
import "./i18n";

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <React.Suspense fallback="Loading...">
        <Provider store={store}>
            <App />
        </Provider>
    </React.Suspense>,
    document.getElementById("root")
);

// serviceWorker.unregister();
