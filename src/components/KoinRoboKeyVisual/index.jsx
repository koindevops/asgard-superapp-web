import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

function KoinRoboKeyVisual(props) {
  const { t } = useTranslation();

  let checkImageOjk =
    t("menuHeaders:nameHeaders.nameWealth") === "Pendanaan" ? true : false;

  return (
    <div className="container-fluid kw-koinRoboVisual">
      <Row>
        <Col xs={24} lg={9}>
          <div className="kw-koinRoboVisual__left-content">
            <img
              src={require(checkImageOjk
                ? "../../assets/image/Licensed-by-OJK-ID-black.png"
                : "../../assets/image/Licensed-by-OJK-EN-black.png")}
              alt=""
              className="kw-koinRoboVisual__left-content__imageLicensedByOjk"
            />
            <h2>{t("koinrobo:koinrobo.koinrobo-keyVisual-headingText")}</h2>
            <p>{t("koinrobo:koinrobo.koinrobo-keyVisual-paragraphOne")}</p>
            <img
              src={require("../../assets/image/google-play-download.svg")}
              alt="koinworks-apps-google-play"
            />
            <img
              src={require("../../assets/image/app-store-download.svg")}
              alt="koinworks-apps-store"
              style={{ marginLeft: 10 }}
            />
          </div>
        </Col>
        <Col xs={24} lg={15}>
        <img
            src={require("../../assets/image/koinrobo-image/koinrobo-image.png")}
            alt="koinworks-koin-robo-visual"
            className="kw-koinRoboVisual__koin-robo-visual-right"
          />
        </Col>
      </Row>
    </div>
  );
}

export default KoinRoboKeyVisual;
