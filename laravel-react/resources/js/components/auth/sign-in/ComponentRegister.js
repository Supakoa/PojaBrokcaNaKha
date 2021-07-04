import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ComponentRegister() {
    const { t } = useTranslation();
    return (
        <section className="w-75 m-auto py-3">
            <p>{t("sign.component.whatIs")}</p>
            <p>{t("sign.component.mean")}</p>
            <hr />
            <p>{t("sign.component.you-need-regist")}</p>
            <Link className="m-auto btn btn-light" to="/register">
                {t("sign.component.btn-regist")}
            </Link>
        </section>
    );
}

export default ComponentRegister;
