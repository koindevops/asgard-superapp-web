import React from "react";
import { useTranslation } from "react-i18next";

function KoinP2pGetKnow(props) {
    const {t} = useTranslation()
  return (
    <div className="kw-koinp2p-getKnow">
      <h3>{t("koinp2p:koinp2p.koinp2p-content-statistik-label")}</h3>
      <p>{t("koinp2p:koinp2p.koinp2p-content-statistik-descriptionLabel")}</p>
      <a
        href="https://koinworks.com/super-app/en/diversification/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("koinp2p:koinp2p.koinp2p-content-statistik-leanMore")}
      </a>
    </div>
  );
}

export default KoinP2pGetKnow;
