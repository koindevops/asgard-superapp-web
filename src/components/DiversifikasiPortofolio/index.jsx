import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";

function DiversifikasiPortofolio(props) {
  const { t } = useTranslation();
  return (
    <div className="container-fluid">
      <div className="kw-diversifikasiPortofolio-wrapper">
        <Row>
          <Col xs={24} md={14} lg={12}>
            <h2>{t("diversification:diversifikasi.heading")}</h2>
            <p>{t("diversification:diversifikasi.description")}</p>
          </Col>
          <Col xs={24} md={10} lg={12}>
            <img
              src={require("../../assets/image/super-app-diversifikasi/diversification-key.png")}
              alt=""
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DiversifikasiPortofolio;
