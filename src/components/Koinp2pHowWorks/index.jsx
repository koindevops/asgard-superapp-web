import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

function KoinP2pHowWorks(props) {
  const { t } = useTranslation();
  return (
    <div className="container-fluid">
      <div className="kw-koinp2p-how-works-wrapper">
        <h3>{t("koinp2p:koinp2p.koinp2p-content-how-koinp2p-works-label")}</h3>
        <img
          src={require("../../assets/image/kw-how-to-work-koinp2p.png")}
          alt=""
          className="kw-koinp2p-how-works-wrapper__image-hidden-lg"
        />
        <Row>
          <Col md={8}>
            <img
              src={require("../../assets/image/how-to-use-works-lender.png")}
              alt=""
              className="kw-koinp2p-how-works-wrapper__image-hidden-xs"
            />
            <h4>{t("koinp2p:koinp2p.koinp2p-content-how-koinp2p-lenders")}</h4>
            <p>
              {t(
                "koinp2p:koinp2p.koinp2p-content-how-koinp2p-lenders-description"
              )}
            </p>
          </Col>
          <Col md={8}>
            <img
              src={require("../../assets/image/how-to-use-works-koinworks.png")}
              alt=""
              className="kw-koinp2p-how-works-wrapper__image-hidden-xs"
            />
            <h4>KoinWorks</h4>
            <p>
              {t(
                "koinp2p:koinp2p.koinp2p-content-how-koinp2p-company-koinworks"
              )}
            </p>
          </Col>
          <Col md={8}>
            <img
              src={require("../../assets/image/how-to-use-works-borrowers.png")}
              alt=""
              className="kw-koinp2p-how-works-wrapper__image-hidden-xs"
            />
            <h4>
              {t("koinp2p:koinp2p.koinp2p-content-how-koinp2p-borrowers")}
            </h4>
            <p>
              {t(
                "koinp2p:koinp2p.koinp2p-content-how-koinp2p-borrowers-description"
              )}
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default KoinP2pHowWorks;
