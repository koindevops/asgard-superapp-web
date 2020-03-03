import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";

function DiversifikasiWhat() {
  const { t } = useTranslation();
  return (
    <div className="container-fluid kw-diversifikasiWhat-wrapper">
      <Row>
        <Col xs={24} md={12}>
          <h3>{t("diversification:diversifikasiWhat.heading")}</h3>
          <p>{t("diversification:diversifikasiWhat.description")}</p>
        </Col>
        <Col xs={24} md={12}>
          <p className="kw-diversifikasiWhat-wrapper__pargraph-one">
            {t("diversification:diversifikasiWhat.description")}
            <a
              rel="noopener noreferrer"
              href="https://koinworks.com/blog/teknik-diversifikasi-pendanaan-koinworks/"
              target="_blank"
            >
              <strong>
                &nbsp;
                {t("diversification:diversifikasiWhat.url-link")}
              </strong>
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default DiversifikasiWhat;
