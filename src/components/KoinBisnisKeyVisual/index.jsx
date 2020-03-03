import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";
import VideoLink from "../VideoLink";

function KoinBisnisVisual(props) {
  const { t } = useTranslation();

  let checkImageOjk =
    t("menuHeaders:nameHeaders.nameWealth") === "Pendanaan" ? true : false;
  return (
    <div className="container-fluid kw-bisnisVisual-wrapper">
      <Row>
        <Col xs={24} md={14} lg={14}>
          <img
            src={require(checkImageOjk
              ? "../../assets/image/Licensed-by-OJK-ID-black.png"
              : "../../assets/image/Licensed-by-OJK-EN-black.png")}
            className="kw-bisnisVisual-wrapper__licensed-logo"
            alt=""
          />
          <h3>{t("koinbisnis:koinbisnisTop.heading-label")}</h3>
          <p className="kw-bisnisVisual-wrapper__pargraph-top">
            {t("koinbisnis:koinbisnisTop.description")}
          </p>
          <img
            src={require("../../assets/image/google-play-download.svg")}
            alt="koinworks-apps-google-play"
          />
          <img
            src={require("../../assets/image/app-store-download.svg")}
            alt="koinworks-apps-store"
            style={{ marginLeft: 10 }}
          />
          <p className="kw-bisnisVisual-wrapper__arready-account">
            {t("koinbisnis:koinbisnisTop.arready-account")}
          </p>
          <a href="https://v1.koinworks.com/users/sign_in" rel="noopener noreferrer" target="_blank">
            {t("koinbisnis:koinbisnisTop.arready-link")}
          </a>
          <p className="kw-bisnisVisual-wrapper__arready-account">
            {t("koinbisnis:koinbisnisTop.arready-accountLink")}
          </p>
        </Col>
        <Col xs={24} md={10} lg={10}>
          <VideoLink
            image={require("../../assets/image/koinbisnis-image/KoinBisnis-Header.png")}
            video={"https://www.youtube.com/embed/IjxZl5BEFXM"}
          />
        </Col>
      </Row>
    </div>
  );
}

export default KoinBisnisVisual;
