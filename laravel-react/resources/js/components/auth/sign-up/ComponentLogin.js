import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ComponentLogIn() {
    const { t } = useTranslation();
    return (
        <section className="w-75 m-auto py-3">
            <p>{t("sign.component.whatIs")}</p>
            <p>{t("sign.component.mean")}</p>
            <hr />
            <p>{t("sign.component.you-need")}</p>
            <Link className="m-auto btn btn-light" to="/login">
                {t("sign.component.btn")}
            </Link>
        </section>
    );
}
