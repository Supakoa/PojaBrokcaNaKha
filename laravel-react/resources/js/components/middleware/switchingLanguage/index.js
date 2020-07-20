import React from "react";
import { useTranslation } from "react-i18next";
import { switchingLanguage } from "./switchingLanguage";
import { Image } from "react-bootstrap";

export default function SwitchingLanguageBtn(props) {
    const { i18n } = useTranslation("", { useSuspense: false });

    return (
        <Image
            src={
                i18n.language === "th"
                    ? "https://findicons.com/files/icons/2838/flat_round_world_flag_icon_set/512/thailand.png"
                    : "https://www.onemorelink.co.th/frontend_html/images/icon_en.png"
            }
            className="d-inline-block align-top"
            width="30"
            height="30"
            rounded="true"
            onClick={() => switchingLanguage(i18n)}
        />
    );
}
