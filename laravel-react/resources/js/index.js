import React from "react";
import ReactDOM from "react-dom";
import App from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import allReducers from "./redux/reducers";
import { Provider } from "react-redux";
import "./i18n";
import { Container, Spinner } from "react-bootstrap";

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const LoadSuspense = () => {
    return (
        <Container
            style={{ minHeight: "100vh", width: "100%" }}
            className="d-flex align-items-center justify-content-center"
        >
            <Spinner animation="border" variant="info" />
        </Container>
    );
};

ReactDOM.render(
    <React.Suspense fallback={<LoadSuspense />}>
        <Provider store={store}>
            <App />
        </Provider>
    </React.Suspense>,
    document.getElementById("root")
);

// serviceWorker.unregister();
