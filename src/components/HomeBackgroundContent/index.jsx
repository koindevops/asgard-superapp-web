import React from "react";
import { Row, Col } from "antd";
import IconOjkEn from "../../assets/image/Licensed-by-OJK-EN-white.png";
import IconOjkId from "../../assets/image/Licensed-by-OJK-ID-white.png";
import { useTranslation } from "react-i18next";

function HomeBackgroundContent() {
  const { t } = useTranslation();

  let checkImageOjk =
    t("menuHeaders:nameHeaders.nameWealth") === "Pendanaan" ? true : false;

  return (
    <div className="kw-home-mobile">
      <div className="kw-home-background">
        <div className="container-fluid">
          <Row>
            <Col xs={24} lg={24} className="kw-home-background__section">
              <div className="kw-home-background__image">
                <Row>
                  <Col xs={12} sm={8} md={7} lg={4}>
                    <img
                      src={checkImageOjk ? IconOjkId : IconOjkEn}
                      alt="Licensed by OJK ID - white"
                      className="kw-home-background__image__image-ojk"
                    />
                  </Col>
                  <Col xs={12} sm={16} md={17} lg={16}>
                    <div className="kw-home-background__image__box-tkb">
                      <h3>
                        TKB90: <span id="">97,85%</span>
                      </h3>
                    </div>
                  </Col>
                  <Col xs={24} lg={24}>
                    <h2>{t("homeLanguage:homeLanguage.homeSolutionText")}</h2>
                    <h4>
                      {t("homeLanguage:homeLanguage.homeSolutionTextParagraph")}
                    </h4>
                  </Col>
                  <Col xs={24} lg={24}>
                    <div className="kw-home-background__download-mobile">
                      <p className="kw-home-background__download-mobile__text-mobile">
                        {t("homeLanguage:homeLanguage.homeSolutionMobile")}
                      </p>
                      <div className="kw-home-background__download-mobile__mobile-download-picutre">
                        <a href="https://play.google.com/store/apps/details?id=com.koinworks.app">
                          <img
                            src={require("../../assets/image/google-play-download.svg")}
                            alt=""
                            className="kw-home-background__download-mobile__image-mobile-apps"
                          />
                        </a>
                        <a href="https://apps.apple.com/id/app/id1457026579?mt=8">
                          <img
                            src={require("../../assets/image/app-store-download.svg")}
                            alt=""
                            className="kw-home-background__download-mobile__image-mobile-apps"
                          />
                        </a>
                        <p className="kw-home-background__download-mobile__text-mobile-barcode">
                          {t("common:or.common_or")}
                        </p>
                        <img
                          src={require("../../assets/image/koinworks-superapp-qr-code-300x300.jpeg")}
                          alt=""
                          className="kw-home-background__download-mobile__barcode-image"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HomeBackgroundContent;
