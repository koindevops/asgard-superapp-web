import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import IconOjk from "../../assets/image/logo-ojk-footer.png";

function FooterBottom() {
  const { t } = useTranslation();
  return (
    <div className="container-fluid kw-footer-bottom-wrapper">
      <Row>
        <Col xs={12} md={6} sm={8} lg={4}>
          <p className="kw-footer-bottom-wrapper__paragraph-one">
            {t("footer:footer-bottom.footer-bottom-paragraph-one")}
          </p>
        </Col>
        <Col xs={12} md={4} sm={4} lg={2}>
          <img
            src={IconOjk}
            style={{ width: "100%" }}
            alt="Licensed by OJK ID - white"
          />
        </Col>
        <Col xs={12} md={4} sm={6} lg={3}>
          <p
            style={{ marginLeft: 40 }}
            className="kw-footer-bottom-wrapper__paragraph-one"
          >
            {t("footer:footer-bottom.footer-bottom-memberOf")}
          </p>
        </Col>
        <Col xs={12} md={4} sm={4} lg={2}>
          <img
            src={require("../../assets/image/logo-afpi.png")}
            style={{ width: "100%" }}
            alt="koinworks-afpi"
          />
        </Col>
      </Row>
      <ol>
        <Row>
          <Col cx={12} lg={12} style={{ padding: 20 }}>
            <p className="kw-footer-bottom-wrapper__paragraph-two">
              <b>{t("footer:footer-bottom.footer-bottom-attention")}</b>
            </p>

            <li>
              <p className="kw-footer-bottom-wrapper__paragraph-two">
                {t("footer:footer-bottom.footer-bottom-attention-one")}
              </p>
            </li>
            <li>
              <p className="kw-footer-bottom-wrapper__paragraph-two">
                {t("footer:footer-bottom.footer-bottom-attention-two")}
              </p>
            </li>
            <li>
              <p className="kw-footer-bottom-wrapper__paragraph-two">
                {t("footer:footer-bottom.footer-bottom-attention-three")}
              </p>
            </li>
            <li>
              <p className="kw-footer-bottom-wrapper__paragraph-two">
                {t("footer:footer-bottom.footer-bottom-attention-four")}
              </p>
            </li>
            <li>
              <p className="kw-footer-bottom-wrapper__paragraph-two">
                {t("footer:footer-bottom.footer-bottom-attention-five")}
              </p>
            </li>
          </Col>
          <Col
            xs={24}
            lg={12}
            className="kw-footer-bottom-wrapper__paragraph-wrapper-right"
          >
            <li>
              <p className="kw-footer-bottom-wrapper__paragraph-two">
                {t("footer:footer-bottom.footer-bottom-attention-six")}
              </p>
            </li>
            <li>
              <p className="kw-footer-bottom-wrapper__paragraph-two">
                {t("footer:footer-bottom.footer-bottom-attention-seven")}
              </p>
            </li>
            <li>
              <p className="kw-footer-bottom-wrapper__paragraph-two">
                {t("footer:footer-bottom.footer-bottom-attention-eight")}
              </p>
            </li>
            <li>
              <p className="kw-footer-bottom-wrapper__paragraph-two">
                {t("footer:footer-bottom.footer-bottom-attention-nine")}
              </p>
            </li>
          </Col>
        </Row>
      </ol>
      <Row>
        <Col lg={24} style={{ padding: 20 }}>
          <p className="kw-footer-bottom-wrapper__paragraph-two">
            {t("footer:footer-bottom.footer-bottom-paragraph-oneEnd")}
          </p>
          <p className="kw-footer-bottom-wrapper__paragraph-two">
            {t("footer:footer-bottom.footer-bottom-paragraph-oneTwo")}
          </p>
        </Col>
        <p
          className="kw-footer-bottom-wrapper__paragraph-two"
          dangerouslySetInnerHTML={{
            __html: `&copy 2016 - ${new Date().getFullYear()}<b>• Koinworks,</b> PT Lunaria Annua Teknologi. All Rights Reserved.`
          }}
        />
      </Row>
    </div>
  );
}

export default FooterBottom;
