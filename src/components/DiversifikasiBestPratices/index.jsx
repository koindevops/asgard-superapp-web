import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";

function DiversifikasiBestPratices(props) {
  const { t } = useTranslation();
  return (
    <div className="container-fluid kw-diversifikasiBestPratices-wrapper">
      <Row>
        <Col md={14} lg={15} xs={24}>
          <h3>{t("diversification:diversifikasiBestPratices.heading")}</h3>
          <h4>
            {t("diversification:diversifikasiBestPratices.headingSecond")}
          </h4>
          <p>
            {t("diversification:diversifikasiBestPratices.description")}
            <strong>
              {t("diversification:diversifikasiBestPratices.descriptionStrong")}
            </strong>
            {t("diversification:diversifikasiBestPratices.descriptionTwo")}
          </p>
        </Col>
        <Col md={10} xs={24} lg={9}>
          <img
            src={require("../../assets/image/super-app-diversifikasi/diversification-image.png")}
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
}

export default DiversifikasiBestPratices;
