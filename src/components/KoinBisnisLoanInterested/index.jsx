import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

function KoinBisnisLoanInterested(props) {
  const { t } = useTranslation();
  return (
    <div className="container-fluid kw-KoinBisnisLoanInterested-wrapper">
      <h3>{t("koinbisnis:koinbisnisLoanInterested.heading")}</h3>
      <Row style={{ marginTop: 55 }}>
        <Col xs={24} md={8} lg={8}>
          <div className="kw-KoinBisnisLoanInterested-wrapper__card-wrapper">
            <div className="kw-KoinBisnisLoanInterested-wrapper__card-wrapper__heading">
              <span>
                <strong>
                  {t("koinbisnis:koinbisnisLoanInterested.labelStrongOneTwo")}
                </strong>
                <br />
                {t("koinbisnis:koinbisnisLoanInterested.labelSpanOne")}
              </span>
            </div>
            <ul>
              <li>{t("koinbisnis:koinbisnisLoanInterested.listOneCardOne")}</li>
              <li>{t("koinbisnis:koinbisnisLoanInterested.listOneCardTwo")}</li>
              <li>
                {t("koinbisnis:koinbisnisLoanInterested.listOneCardThree")}
              </li>
              <li>
                {t("koinbisnis:koinbisnisLoanInterested.listOneCardFour")}
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={24} md={8} lg={8}>
          <div className="kw-KoinBisnisLoanInterested-wrapper__card-wrapper-center">
            <div className="kw-KoinBisnisLoanInterested-wrapper__card-wrapper-center__heading">
              <span>
                <strong>
                  {t("koinbisnis:koinbisnisLoanInterested.labelStrongOneTwo")}
                </strong>
                <br />
                {t("koinbisnis:koinbisnisLoanInterested.labelSpanTwo")}
              </span>
            </div>
            <ul>
              <li>
                {" "}
                {t("koinbisnis:koinbisnisLoanInterested.listTwoCardOne")}
              </li>
              <li>
                {" "}
                {t("koinbisnis:koinbisnisLoanInterested.listTwoCardTwo")}
              </li>
              <li>
                {" "}
                {t("koinbisnis:koinbisnisLoanInterested.listTwoCardThree")}
              </li>
              <li>
                {" "}
                {t("koinbisnis:koinbisnisLoanInterested.listTwoCardFour")}
              </li>
              <li>
                {" "}
                {t("koinbisnis:koinbisnisLoanInterested.listTwoCardFive")}
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={24} md={8} lg={8}>
          <div className="kw-KoinBisnisLoanInterested-wrapper__card-wrapper-right">
            <div className="kw-KoinBisnisLoanInterested-wrapper__card-wrapper-right__heading">
              <span>
                <strong>
                  {t("koinbisnis:koinbisnisLoanInterested.labelStrongThree")}
                </strong>
              </span>
            </div>
            <ul>
              <li>
                <b> 0,75% - 1,67%</b>
                {t("koinbisnis:koinbisnisLoanInterested.listThreeCardOne")}
              </li>
              <li>
                <b> 2% - 4%</b>
                {t("koinbisnis:koinbisnisLoanInterested.listThreeCardTwo")}
              </li>
              <li>
                <b> 0,24%</b>
                {t("koinbisnis:koinbisnisLoanInterested.listThreeCardFour")}
              </li>
              <li>
                <b> Rp100.000</b>
                {t("koinbisnis:koinbisnisLoanInterested.listThreeCardFive")}
              </li>
              <li>
                <b>Rp2,000,000,000</b>
                {t("koinbisnis:koinbisnisLoanInterested.listThreeCardSix")}
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default KoinBisnisLoanInterested;
