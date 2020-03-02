import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";

function HomeFinancialChoices(props) {
  const { t } = useTranslation();
  return (
    <Row>
      <Col lg={24}>
        <div className="container kw-home-financial-choices">
          <Row>
            <Col md={12} lg={12}>
              <img
                src={require("../../assets/image/financial-choices.svg")}
                className="kw-home-financial-choices__image-choices"
                alt="koinwroks-finance-choices"
              />
            </Col>
            <Col md={12} lg={12}>
              <div style={{ padding: 15 }}>
                <img
                  src={require("../../assets/image/financial-choices-circle-one.svg")}
                  className="kw-home-financial-choices__image-choices-circle-one"
                  alt="koinwroks-finance-choices"
                />
                <img
                  src={require("../../assets/image/financial-choices-circle-two.svg")}
                  className="kw-home-financial-choices__image-choices-circle-two"
                  alt="koinwroks-finance-choices"
                />
                <h3>
                  {t(
                    "homeLanguage:homeFinancialChoices.homeFinancialChoicesHeading"
                  )}
                </h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={6}>
              <h4>100% Online</h4>{" "}
              <p>
                {t(
                  "homeLanguage:homeFinancialChoices.homeFinancialDescriptionOne"
                )}
              </p>
            </Col>
            <Col xs={24} lg={6}>
              <h4>
                {t("homeLanguage:homeFinancialChoices.homeFinancialLabel")}
              </h4>
                <p>{t("homeLanguage:homeFinancialChoices.homeFinancialDescriptionTwo")}</p>
            </Col>
            <Col xs={24} lg={6}>
                <h4>{t("homeLanguage:homeFinancialChoices.homeFinancialLabelTwo")}</h4>
                <p>{t("homeLanguage:homeFinancialChoices.homeFinancialDescriptionThree")}</p>
            </Col>
            <Col xs={24} lg={6}>
                <h4>{t("homeLanguage:homeFinancialChoices.homeFinancialLabelThree")}</h4>
                <p>{t("homeLanguage:homeFinancialChoices.homeFinancialDescriptionFour")}</p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default HomeFinancialChoices;
