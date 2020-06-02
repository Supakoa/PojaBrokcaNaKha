import { useLocation } from "react-router-dom";
export default function NoMatch() {
    let location = useLocation();

    return (
        <div
            className="container d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <h3>
                404 Not Found Page <Link to="/">{location.pathname}</Link>
            </h3>
        </div>
    );
}
