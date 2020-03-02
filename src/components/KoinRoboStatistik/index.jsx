import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";

function KoinRoboStatistik() {
  const { t } = useTranslation();
  return (
    <div className="kw-koinRobo-statistik">
      <Row>
        <Col md={8}>
          <div className="kw-koinRobo-statistik__left-content">
            <img
              src={require("../../assets/image/koinrobo-image/koinrobo-statistik-one.svg")}
              alt=""
            />
            <h4>{t("koinrobo:koinrobo.koinrobo-statistic-headingOne")}</h4>
            <p>{t("koinrobo:koinrobo.koinrobo-statistic-paragraphOne")}</p>
          </div>
        </Col>
        <Col md={8}>
          <div className="kw-koinRobo-statistik__center-content">
            <img
              src={require("../../assets/image/koinrobo-image/koinrobo-statistik-two.svg")}
              alt=""
            />
            <h4>{t("koinrobo:koinrobo.koinrobo-statistic-headingTwo")}</h4>
            <p>{t("koinrobo:koinrobo.koinrobo-statistic-paragraphTwo")}</p>
          </div>
        </Col>
        <Col md={8}>
          <div className="kw-koinRobo-statistik__right-content">
            <img
              src={require("../../assets/image/koinrobo-image/koinrobo-statistik-two.svg")}
              alt=""
            />
            <h4>{t("koinrobo:koinrobo.koinrobo-statistic-headingThree")}</h4>
            <p>{t("koinrobo:koinrobo.koinrobo-statistic-paragraphThree")}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default KoinRoboStatistik;
