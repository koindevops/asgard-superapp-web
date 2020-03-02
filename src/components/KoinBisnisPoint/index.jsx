import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";

function KoinBisnisPoint(props) {
  const { t } = useTranslation();
  return (
    <div className="kw-koinBisnisPoint-wrapper">
      <Row>
        <Col xs={24} md={6}>
          <div className="kw-koinBisnisPoint-wrapper__left-content">
            <img
              src={require("../../assets/image/koinbisnis-image/koinbisnis-iconTop-1.svg")}
              alt=""
            />
            <div className="kw-koinBisnisPoint-wrapper__paragraph">
              <h4>{t("koinbisnis:koinbisnisPoint.labelOne")}</h4>
              <p>{t("koinbisnis:koinbisnisPoint.descriptionOne")}</p>
            </div>
          </div>
        </Col>
        <Col xs={24} md={6}>
          <div className="kw-koinBisnisPoint-wrapper__leftTwo-content">
            <img
              src={require("../../assets/image/koinbisnis-image/koinbisnis-iconTop-2.svg")}
              alt=""
            />
            <div className="kw-koinBisnisPoint-wrapper__paragraph">
              <h4>{t("koinbisnis:koinbisnisPoint.labelTwo")}</h4>
              <p>{t("koinbisnis:koinbisnisPoint.descriptionTwo")}</p>
            </div>
          </div>
        </Col>
        <Col xs={24} md={6}>
          <div className="kw-koinBisnisPoint-wrapper__right-content">
            <img
              src={require("../../assets/image/koinbisnis-image/koinbisnis-iconTop-3.svg")}
              alt=""
            />
            <div className="kw-koinBisnisPoint-wrapper__paragraph">
              <h4>{t("koinbisnis:koinbisnisPoint.labelThree")}</h4>
              <p>{t("koinbisnis:koinbisnisPoint.descriptionThree")}</p>
            </div>
          </div>
        </Col>
        <Col xs={24} md={6}>
          <div className="kw-koinBisnisPoint-wrapper__rightTwo-content">
            <img
              src={require("../../assets/image/koinbisnis-image/koinbisnis-iconTop-4.svg")}
              alt=""
            />
            <div className="kw-koinBisnisPoint-wrapper__paragraph">
              <h4>{t("koinbisnis:koinbisnisPoint.labelFour")}</h4>
              <p>{t("koinbisnis:koinbisnisPoint.descriptionFour")}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default KoinBisnisPoint;
