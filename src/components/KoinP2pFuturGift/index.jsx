import React from "react";
import { Row, Col } from "antd";
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

function KoinP2pFuturGift(props) {
  const { t } = useTranslation();
  return (
    <Row>
      <Col xs={24} lg={24}>
        <div className="kw-koinp2p-futurGift-wrapper">
          <div className="kw-koinp2p-futurGift-wrapper__content-futurGift">
            <p className="kw-koinp2p-futurGift-wrapper__content-paragraphOne">
              {" "}
              {t("koinp2p:koinp2p.koinp2p-content-top-futurGiftOne")}{" "}
              <b>{t("koinp2p:koinp2p.koinp2p-content-top-free-coins")}</b>{" "}
              {t("koinp2p:koinp2p.koinp2p-content-top-futurGiftTwo")}
            </p>
            <p>
              <i>FUTURGIFT</i>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default KoinP2pFuturGift;
