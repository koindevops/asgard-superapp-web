import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import VideoLink from "../VideoLink";

function KoinRoboMakingSocial() {
  const { t } = useTranslation();
  return (
    <div className="kw-koinRobo-makingSocial-wrapper">
      <div className="container-fluid">
        <Row>
          <Col lg={10} xs={24} md={6}>
          <VideoLink
            video={"https://www.youtube.com/embed/AEI7myFauSA"}
            image={require("../../assets/image/koinrobo-image/KoinRobo-Change-how-you-invest.png")}
          />
          </Col>
          <Col lg={14} xs={24} md={18}>
            <h3>{t("koinrobo:koinrobo.koinrobo-makingSocial-headingLabel")}</h3>
            <p>{t("koinrobo:koinrobo.koinrobo-makingSocial-description")}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default KoinRoboMakingSocial;
