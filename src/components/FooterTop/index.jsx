import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function FooterTop() {
  const { t } = useTranslation();
  return (
    <div className="container-fluid kw-footer-top-wrapper">
      <Row>
        <Col xs={24} lg={9}>
          <h3>{t("footer:footer-top.footer-top-heading")}</h3>
          <h5>{t("footer:footer-top.footer-top-label")}</h5>
          <div className="kw-footer-top-wrapper__left-content">
            <img
              src={require("../../assets/image/google-play-download.svg")}
              alt=""
            />
            <img
              src={require("../../assets/image/app-store-download.svg")}
              alt=""
            />
            <p className="kw-footer-top-wrapper__heading-footer-top">
              {t("common:or.common_or")}
            </p>
            <img
              src={require("../../assets/image/koinworks-superapp-qr-code-300x300.jpeg")}
              className="kw-footer-top-wrapper__barcode-footer"
              alt=""
            />
          </div>
        </Col>
        <Col xs={12} lg={5}>
          <ul>
            <span className="kw-footer-top-wrapper__widget-title">
              {t("footer:footer-top-link.footer-top-link-company")}
            </span>
            <li>
              <a href="/">
                {" "}
                {t("footer:footer-top-link.footer-top-link-aboutUs")}
              </a>
            </li>
            <li>
              {" "}
              <a href="/">
                {t("footer:footer-top-link.footer-top-link-call-us")}
              </a>
            </li>
            <li>
              {" "}
              <a href="/">
                {t("footer:footer-top-link.footer-top-link-career")}
              </a>
            </li>
            <li>
              {" "}
              <a href="/">{t("footer:footer-top-link.footer-top-link-faq")}</a>
            </li>
            <li>
              {" "}
              <a href="/">
                {t("footer:footer-top-link.footer-top-link-blog")}
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={12} lg={5}>
          <ul>
            <span className="kw-footer-top-wrapper__widget-title">
              {t("footer:footer-top-link.footer-top-link-products")}
            </span>
            <li>
              {" "}
              <Link to="/koinp2p">
                {t("footer:footer-top-link.footer-top-link-koinp2p")}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/koinrobo">
                {t("footer:footer-top-link.footer-top-link-koinrobo")}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/koinBisnis">
                {t("footer:footer-top-link.footer-top-link-koinBisnis")}
                </Link>
            </li>
            <li>
              {" "}
              <Link to="/koinPintar">
                {t("footer:footer-top-link.footer-top-link-koinPintar")}
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs={24} lg={5}>
          <ul>
            <span className="kw-footer-top-wrapper__widget-title">
              Legal
            </span>
            <li>
              {" "}
              <a href="/">
                {t("footer:footer-top-link.footer-top-link-privacyPolicy")}
              </a>
            </li>
            <li>
              {" "}
              <a href="/">
                {t("footer:footer-top-link.footer-top-link-terms-of-use")}
              </a>
            </li>
            <li>
              {" "}
              <a href="/">
                {t("footer:footer-top-link.footer-top-link-terms-condition")}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default FooterTop;
