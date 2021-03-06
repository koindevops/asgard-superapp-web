import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import VideoLink from "../VideoLink";

function KoinP2pTop(props) {
  const { t } = useTranslation();

  let checkImageOjk =
    t("menuHeaders:nameHeaders.nameWealth") === "Pendanaan" ? true : false;

  return (
    <div className="container-fluid">
      <div className="kw-koin-p2p-wrapper">
        <Row>
          <Col lg={12}>
            <div className="kw-koin-p2p-wrapper__content-left">
              <img
                src={require(checkImageOjk
                  ? "../../assets/image/Licensed-by-OJK-ID-black.png"
                  : "../../assets/image/Licensed-by-OJK-EN-black.png")}
                alt=""
                className="kw-koin-p2p-wrapper__imageLicensedByOjk"
              />
              <h2>{t("koinp2p:koinp2p.koinp2p-content-top-heading")}</h2>
              <p className="kw-koin-p2p-wrapper__paragraphOne">
                {t("koinp2p:koinp2p.koinp2p-content-top-paragraphOne")}
              </p>
              <img
                src={require("../../assets/image/google-play-download.svg")}
                alt="koinworks-apps-google-play"
              />
              <img
                src={require("../../assets/image/app-store-download.svg")}
                alt="koinworks-apps-store"
                style={{ marginLeft: 10 }}
              />
            </div>
          </Col>
          <Col lg={12}>
            <VideoLink
              video="
            https://www.youtube.com/embed/XStg5yw-KMo"
              image={require("../../assets/image/first-super-financial-app.png")}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default KoinP2pTop;
