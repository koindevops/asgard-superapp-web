import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";
import VideoLink from "../VideoLink";

function KoinRoboFinancialApp() {
  const { t } = useTranslation();
  return (
    <div className="container-fluid">
      <div className="kw-koinRobo-financial-app-wrapper">
        <Row>
          <Col md={8} xs={24} lg={10}>
            <h3>{t("koinrobo:koinrobo.koinrobo-financialHero-heading")}</h3>
            <p>{t("koinrobo:koinrobo.koinrobo-financialHero-paragraph")}</p>
            <a
              href="https://koinworks.com/super-app/koinrobo/?shortlink=robomiddle&pid=web&c=koinrobo&af_channel=middle&af_click_lookback=30d"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("koinrobo:koinrobo.koinrobo-financialHero-link")}
            </a>
          </Col>
          <Col md={16} xs={24} lg={14}>
            <VideoLink
              video={"https://www.youtube.com/embed/ZgTo-SQtnSs"}
              image={require("../../assets/image/koinp2p-image/lives-with-koinworks-super-financial-app-1.png")}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default KoinRoboFinancialApp;
