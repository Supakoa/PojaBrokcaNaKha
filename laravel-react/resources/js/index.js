import React from "react";
import ReactDOM from "react-dom";
import App from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
// import * as serviceWorker from './serviceWorker'
import { createStore } from "redux";
import allReducers from "./redux/reducers";
import { Provider } from "react-redux";
import "./i18n";
import { Spinner, Container } from "react-bootstrap";

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const LoadingLang = () => {
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <Spinner animation="grow" />
        </Container>
    );
};

ReactDOM.render(
    <React.Suspense fallback={LoadingLang}>
        <Provider store={store}>
            <App />
        </Provider>
    </React.Suspense>,
    document.getElementById("root")
);

// serviceWorker.unregister();
