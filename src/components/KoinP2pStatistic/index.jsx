import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";

function KoinP2pStatistic(props) {
  const { t } = useTranslation();
  return (
    <div className="kw-koinp2p-statistic-wrapper">
      <Row>
        <Col xs={24} md={8}>
          <div className="kw-koinp2p-statistic-wrapper__left-content">
            <img
              src={require("../../assets/image/koinp2p-image/koinp2p-statistik-one.svg")}
              alt=""
            />
            <h3>0,92%</h3>
            <p>NPL</p>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div className="kw-koinp2p-statistic-wrapper__center-content">
            <img
              src={require("../../assets/image/koinp2p-image/koinp2p-statistik-two.svg")}
              alt=""
            />
            <h3>18,89%</h3>
            <p>
              {t("koinp2p:koinp2p.koinp2p-content-statistik-rataRataBunga")}
            </p>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div className="kw-koinp2p-statistic-wrapper__right-content">
            <img
              src={require("../../assets/image/koinp2p-image/koinp2p-statistik-three.svg")}
              alt=""
            />
            <h3>114 {t("koinp2p:koinp2p.koinp2p-content-statistik-loan")}</h3>
            <p>
              {t("koinp2p:koinp2p.koinp2p-content-statistik-loanDescription")}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default KoinP2pStatistic;
