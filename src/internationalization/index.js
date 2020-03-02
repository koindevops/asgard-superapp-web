import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import menuHeaders_id from "../assets/languages/menuHeaders/id.json";
import menuHeaders_en from "../assets/languages/menuHeaders/en.json";
import homeLanguage_id from "../assets/languages/home/id.json";
import homeLanguage_en from "../assets/languages/home/en.json";
import common_id from "../assets/languages/common/id.json";
import common_en from "../assets/languages/common/en.json";
import footer_id from "../assets/languages/footer/id.json";
import footer_en from "../assets/languages/footer/en.json";
import koinp2p_id from "../assets/languages/koinp2p/id.json";
import koinp2p_en from "../assets/languages/koinp2p/en.json";
import koinrobo_id from "../assets/languages/koinrobo/id.json";
import koinrobo_en from "../assets/languages/koinrobo/en.json";
import koinbisnis_id from "../assets/languages/koinbisnis/id.json";
import koinbisnis_en from "../assets/languages/koinbisnis/en.json";

i18n.use(initReactI18next).init({
  lng: "id",
  fallbackLng: "id",
  debug: true,
  interpolation: {
    escapeValue: false
  },
  resources: {
    id: {
      menuHeaders: menuHeaders_id,
      homeLanguage: homeLanguage_id,
      common: common_id,
      footer: footer_id,
      koinp2p: koinp2p_id,
      koinrobo: koinrobo_id,
      koinbisnis: koinbisnis_id
    },
    en: {
      menuHeaders: menuHeaders_en,
      homeLanguage: homeLanguage_en,
      common: common_en,
      footer: footer_en,
      koinp2p: koinp2p_en,
      koinrobo: koinrobo_en,
      koinbisnis : koinrobo_en
    }
  }
});

export default i18n;
