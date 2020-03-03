import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import VideoLink from "../VideoLink";

function KoinBisnisInspiring(props) {
  const { t } = useTranslation();
  return (
    <div className="container-fluid kw-koinBisnisInspiring-wrapper">
      <Row>
        <Col xs={24} md={14} lg={15}>
          <h3>{t("koinbisnis:koinbisnisInspiring.heading")}</h3>
          <p>{t("koinbisnis:koinbisnisInspiring.description")}</p>
        </Col>
        <Col xs={24} md={10} lg={9}>
          <VideoLink
            video="https://www.youtube.com/embed/Fw7f9FIuedY"
            image={require("../../assets/image/koinbisnis-image/Borrower-Story-KoinBisnis.png")}
          />
        </Col>
      </Row>
    </div>
  );
}

export default KoinBisnisInspiring;
