import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

function KoinBisnisVisual(props) {
  const { t } = useTranslation();

  let checkImageOjk =
    t("menuHeaders:nameHeaders.nameWealth") === "Pendanaan" ? true : false;
  return (
    <div className="container-fluid kw-bisnisVisual-wrapper">
      <Row>
        <Col xs={24} md={13} lg={10}>
          <img
            src={require("../../assets/image/Licensed-by-OJK-ID-black.png")}
            className="kw-bisnisVisual-wrapper__licensed-logo"
            alt=""
          />
          <h3>{t("koinbisnis:koinbisnisTop.heading-label")}</h3>
        </Col>
        <Col xs={24} md={11} lg={14}></Col>
      </Row>
    </div>
  );
}

export default KoinBisnisVisual;
