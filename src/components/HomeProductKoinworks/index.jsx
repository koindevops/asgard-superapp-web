import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";

function HomeProductKoinworks(props) {
  const { t } = useTranslation();
  return (
    <div className="container-fluid kw-home-product-koinworks">
      <Row>
        <Col lg={24}>
          <h3 className="kw-home-product-koinworks__heading-text">
            {t("homeLanguage:homeProductKoinworks.homeProductKoinworksHeading")}
          </h3>
          <p className="kw-home-product-koinworks__heading-label">
            {t(
              "homeLanguage:homeProductKoinworks.homeProductKoinworksDescription"
            )}
          </p>
        </Col>
        <Col xs={24} sm={8} lg={6}>
          <h4>
            {t("homeLanguage:homeProductKoinworks.homeProductKoinworksWealth")}
          </h4>
          <img src={require("../../assets/image/koin-robo.svg")} alt="" />
          <p className="kw-home-product-koinworks__description">
            {t(
              "homeLanguage:homeProductKoinworks.homeProductKoinworksDescKoinRobo"
            )}
          </p>
        </Col>
        <Col xs={24} sm={8} lg={6}>
          <div className="kw-home-product-koinworks__image-koin-p2p">
            <img src={require("../../assets/image/koin-p2p.svg")} alt="" />
            <p className="kw-home-product-koinworks__description">
              {t("homeLanguage:homeProductKoinworks.homeProductKoinworksP2p")}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={8} lg={6}>
          {" "}
          <h4>
            {t("homeLanguage:homeProductKoinworks.homeProductKoinworksLoan")}
          </h4>
          <img src={require("../../assets/image/koin-bisnis.svg")} alt="" />
          <p className="kw-home-product-koinworks__description">
            {t(
              "homeLanguage:homeProductKoinworks.homeProductKoinworksDescKoinRobo"
            )}
          </p>
        </Col>
        <Col lg={6} />
      </Row>
    </div>
  );
}

export default HomeProductKoinworks;
