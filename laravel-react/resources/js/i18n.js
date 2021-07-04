import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "../../public/locales/en/translations";
import translationTH from "../../public/locales/th/translations";
const resources = {
    en: {
        translations: translationEN
    },
    th: {
        translations: translationTH
    }
};
i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "th",

        ns: ["translations"],
        lng: ["th", "en"],
        defaultNS: "translations",
        debug: true,
        interpolation: {
            escapeValue: false // not needed for react!!
        },
        react: {
            wait: true
        },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json"
        }
    });
export default i18n;
