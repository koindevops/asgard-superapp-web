import React from "react";
import { Section } from "./style";
import DiversifikasiPortofolio from "../../components/DiversifikasiPortofolio";
import DiversifikasiBestPratices from "../../components/DiversifikasiBestPratices";
import DiversifikasiWhat from "../../components/DiversifikasiWhat";
import KoinP2pProfil from "../../components/KoinP2pProfil";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";

function Diversifikasi(props) {
  const { t } = useTranslation();

  let checkDiversifikasi =
    t("menuHeaders:nameHeaders.nameWealth") === "Pendanaan" ? true : false;

  return (
    <Section>
      <Helmet>
        <title>
          {checkDiversifikasi
            ? "Diversifikasi Portofolio Pendanaan | Koinworks"
            : "Manage Your Portofolio with Diversification | Koinworks"}
        </title>
      </Helmet>
      <DiversifikasiPortofolio />
      <DiversifikasiBestPratices />
      <DiversifikasiWhat />
      <KoinP2pProfil diversifikasi={true} />
    </Section>
  );
}

export default Diversifikasi;
