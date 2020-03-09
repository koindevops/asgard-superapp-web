import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import VideoLink from "../../components/VideoLink";

function KoinP2pFinancialApp() {
  const { t } = useTranslation();
  return (
    <div className="container-fluid">
      <div className="kw-koinp2p-financialApp">
      <Row>
        <Col md={10}>
          <h3>{t("koinp2p:koinp2p.koinp2p-content-financial-appHeading")}</h3>
          <p>{t("koinp2p:koinp2p.koinp2p-content-financial-paragraph")}</p>
          <a href="https://apps.apple.com/id/app/id1457026579?mt=8">
            {t("koinp2p:koinp2p.koinp2p-content-financial-linkLending")}
          </a>
        </Col>
        <Col md={14}>
          <VideoLink
            video="https://www.youtube.com/embed/ZgTo-SQtnSs"
            image={require("../../assets/image/koinp2p-image/lives-with-koinworks-super-financial-app-1.png")}
          />
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default KoinP2pFinancialApp;
