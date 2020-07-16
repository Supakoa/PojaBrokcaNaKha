export const switchingLanguage = i18n => {
    if (i18n.language === "en") {
        i18n.changeLanguage("th");
    } else {
        i18n.changeLanguage("en");
    }

};
