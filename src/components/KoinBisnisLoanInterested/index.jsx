import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

function KoinBisnisLoanInterested(props) {
  const { t } = useTranslation();
  return (
    <div className="container-fluid kw-KoinBisnisLoanInterested-wrapper">
      <h3>{t("koinbisnis:koinbisnisLoanInterested.heading")}</h3>
      <Row>
        <Col xs={24} md={8} lg={8}>
          <div className="kw-KoinBisnisLoanInterested-wrapper__card-wrapper">
            <div className="kw-KoinBisnisLoanInterested-wrapper__card-wrapper__heading">
              <span>
                <strong>SYARAT UNTUK</strong>
                <br />
                Perorangan
              </span>
            </div>
            <ul>
              <li> KTP</li>
              <li> KTP</li>
              <li> KTP</li>
              <li> KTP</li>
            </ul>
          </div>
        </Col>
        <Col xs={24} md={8} lg={8}>
          <div className="kw-KoinBisnisLoanInterested-wrapper__card-wrapper">
            <div className="kw-KoinBisnisLoanInterested-wrapper__card-wrapper__heading">
              <span>
                <strong>SYARAT UNTUK</strong>
                <br />
                Perorangan
              </span>
            </div>
            <ul>
              <li> KTP</li>
              <li> KTP</li>
              <li> KTP</li>
              <li> KTP</li>
            </ul>
          </div>
        </Col>
        <Col xs={24} md={8} lg={8}>
          <div className="kw-KoinBisnisLoanInterested-wrapper__card-wrapper">
            <div className="kw-KoinBisnisLoanInterested-wrapper__card-wrapper__heading">
              <span>
                <strong>SYARAT UNTUK</strong>
                <br />
                Perorangan
              </span>
            </div>
            <ul>
              <li> KTP</li>
              <li> KTP</li>
              <li> KTP</li>
              <li> KTP</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default KoinBisnisLoanInterested;
