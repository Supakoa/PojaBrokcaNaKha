import React from "react";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const LoadingComponent = () => {
    const [outLoading, setOutLoading] = React.useState(false);
    const { i18n } = useTranslation();

    React.useEffect(() => {
        setTimeout(() => {
            setOutLoading(true);
        }, 2500);
        return () => clearTimeout();
    });

    if (outLoading) {
        return null;
    } else {
        return (
            <div
                style={{ minHeight: "10vh" }}
                className="d-flex align-items-center justify-content-center"
            >
                <span>
                    <Spinner animation="border" size="sm" />{" "}
                    {i18n.language === "th" ? "กำลังโลหด" : "Loading"}...
                </span>
            </div>
        );
    }
};

export default LoadingComponent;
