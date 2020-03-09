import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";

function KoinP2pTheyHelp() {
  const { t } = useTranslation();

  let checkKoinP2pTheyHelp =
    t("menuHeaders:nameHeaders.nameWealth") === "Pendanaan" ? true : false;

  return (
    <div className="container-fluid">
      <div className="kw-koinp2p-they-help">
      <Row>
        <Col md={8}>
          <img
            src={require(checkKoinP2pTheyHelp
              ? "../../assets/image/koinp2p-image/kw-image-the-help-id.png"
              : "../../assets/image/koinp2p-image/kw-image-the-help-en.png")}
            alt=""
          />
        </Col>
        <Col md={16}>
          <div className="kw-koinp2p-they-help__paragraph">
            <h3>{t("koinp2p:koinp2p.koinp2p-content-theyHelp-heading")}</h3>
            <p>{t("koinp2p:koinp2p.koinp2p-content-theyHelp-pargraph")}</p>
          </div>
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default KoinP2pTheyHelp;
