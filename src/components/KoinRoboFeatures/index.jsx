import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";

function KoinRoboFeatures(props) {
  const { t } = useTranslation();
  return (
    <div className="container-fluid">
      <div className="kw-koinRoboFeatures-wrapper">
        <h3>{t("koinrobo:koinrobo.koinrobo-features-headingLabel")}</h3>
        <Row>
          <Col md={6}>
            <img
              src={require("../../assets/image/koinrobo-image/koinrobo-features-one.svg")}
              alt=""
            />
            <h4>{t("koinrobo:koinrobo.koinrobo-features-labelOne")}</h4>
            <p>{t("koinrobo:koinrobo.koinrobo-features-descriptionOne")}</p>
          </Col>
          <Col md={6}>
            <img
              src={require("../../assets/image/koinrobo-image/koinrobo-features-two.svg")}
              alt=""
            />
            <h4>{t("koinrobo:koinrobo.koinrobo-features-labelTwo")}</h4>
            <p>{t("koinrobo:koinrobo.koinrobo-features-descriptionTwo")}</p>
          </Col>
          <Col md={6}>
            <img
              src={require("../../assets/image/koinrobo-image/koinrobo-features-three.svg")}
              alt=""
            />
            <h4>{t("koinrobo:koinrobo.koinrobo-features-labelThree")}</h4>
            <p>{t("koinrobo:koinrobo.koinrobo-features-descriptionThree")}</p>
          </Col>
          <Col md={6}>
            <img
              src={require("../../assets/image/koinrobo-image/koinrobo-features-four.svg")}
              alt=""
            />
            <h4>{t("koinrobo:koinrobo.koinrobo-features-labelFour")}</h4>
            <p>{t("koinrobo:koinrobo.koinrobo-features-descriptionFour")}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default KoinRoboFeatures;
