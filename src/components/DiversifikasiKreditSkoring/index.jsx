import React from "react";
import { useTranslation } from "react-i18next";

function DiversifikasiKreditSkoring() {
  const { t } = useTranslation();
  return (
    <div className="container-fluid kw-diversifikasiKreditSkoring-wrapper">
      <h3>{t("diversification:diversifikatiKreditSkoring.heading")}</h3>
      <p>{t("diversification:diversifikatiKreditSkoring.description")}</p>
    </div>
  );
}

export default DiversifikasiKreditSkoring;
