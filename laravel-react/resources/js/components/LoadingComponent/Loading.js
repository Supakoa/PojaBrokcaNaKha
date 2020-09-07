import React from "react";
import { Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const LoadingComponent = () => {
    const [outLoading, setOutLoading] = React.useState(false);
    const { i18n } = useTranslation();

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setOutLoading(true);
        }, 3000);
        return () => clearTimeout(timer);
    });

    if (outLoading) {
        return (
            <div className="d-flex align-content-center justify-content-center py-3">
                <i className="fas fa-cogs"></i>
            </div>
        );
    } else {
        return (
            <div
                style={{ minHeight: "10vh" }}
                className="d-flex align-items-center justify-content-center"
            >
                <span>
                    <Spinner animation="border" size="sm" />{" "}
                    {i18n.language === "th" ? "กำลังโหลด" : "Loading"}...
                </span>
            </div>
        );
    }
};

export default LoadingComponent;
