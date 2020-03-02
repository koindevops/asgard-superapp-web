import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";
import Slider from "react-slick";

function KoinBisnisWhy(props) {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    {
      image: require("../../assets/image/koinbisnis-image/iconbisnis-iconMid-1.svg"),
      label: "koinbisnis:koinbisnisWhy.labelOne",
      description: "koinbisnis:koinbisnisWhy.descriptionOne"
    },
    {
      image: require("../../assets/image/koinbisnis-image/iconbisnis-iconMid-2.svg"),
      label: "koinbisnis:koinbisnisWhy.labelTwo",
      description: "koinbisnis:koinbisnisWhy.descriptionTwo"
    },
    {
      image: require("../../assets/image/koinbisnis-image/iconbisnis-iconMid-3.svg"),
      label: "koinbisnis:koinbisnisWhy.labelThree",
      description: "koinbisnis:koinbisnisWhy.descriptionThree"
    },
    {
      image: require("../../assets/image/koinbisnis-image/iconbisnis-iconMid-4.svg"),
      label: "koinbisnis:koinbisnisWhy.labelFour",
      description: "koinbisnis:koinbisnisWhy.descriptionFour"
    },
    {
      image: require("../../assets/image/koinbisnis-image/iconbisnis-iconMid-5.svg"),
      label: "koinbisnis:koinbisnisWhy.labelFive",
      description: "koinbisnis:koinbisnisWhy.descriptionFive"
    },
    {
      image: require("../../assets/image/koinbisnis-image/iconbisnis-iconMid-6.svg"),
      label: "koinbisnis:koinbisnisWhy.labelSix",
      description: "koinbisnis:koinbisnisWhy.descriptionSix"
    }
  ];

  const slides = images.map((image, index) => {
    return (
      <React.Fragment key={index}>
        <img src={image.image} alt="" />
        <h4 style={{ textAlign: "center" }}>{t(image.label)}</h4>
        <p style={{ textAlign: "center" }}>{t(image.description)}</p>
      </React.Fragment>
    );
  });
  return (
    <div className="container kw-koinBisnis-wrapper">
      <h3>{t("koinbisnis:koinbisnisWhy.heading")}</h3>
      <div className="kw-koinBisnis-wrapper__noSlider">
        <Row>
          <Col md={10}>
            <p className="kw-koinBisnis-wrapper__right">
              <img
                src={require("../../assets/image/koinbisnis-image/iconbisnis-iconMid-1.svg")}
                alt=""
              />
            </p>
            <h4 style={{ textAlign: "right" }}>
              {t("koinbisnis:koinbisnisWhy.labelOne")}
            </h4>
            <p style={{ textAlign: "right" }}>
              {t("koinbisnis:koinbisnisWhy.descriptionOne")}
            </p>
            <p className="kw-koinBisnis-wrapper__right">
              <img
                src={require("../../assets/image/koinbisnis-image/iconbisnis-iconMid-2.svg")}
                alt=""
              />
            </p>
            <h4 style={{ textAlign: "right" }}>
              {t("koinbisnis:koinbisnisWhy.labelTwo")}
            </h4>
            <p style={{ textAlign: "right" }}>
              {t("koinbisnis:koinbisnisWhy.descriptionTwo")}
            </p>
            <p className="kw-koinBisnis-wrapper__right">
              <img
                src={require("../../assets/image/koinbisnis-image/iconbisnis-iconMid-3.svg")}
                alt=""
              />
            </p>
            <h4 style={{ textAlign: "right" }}>
              {t("koinbisnis:koinbisnisWhy.labelThree")}
            </h4>
            <p style={{ textAlign: "right" }}>
              {t("koinbisnis:koinbisnisWhy.descriptionThree")}
            </p>
          </Col>
          <Col md={4} />
          <Col md={10}>
            <p>
              <img
                src={require("../../assets/image/koinbisnis-image/iconbisnis-iconMid-4.svg")}
                alt=""
              />
            </p>
            <h4>{t("koinbisnis:koinbisnisWhy.labelFour")}</h4>
            <p>{t("koinbisnis:koinbisnisWhy.descriptionFour")}</p>
            <p>
              <img
                src={require("../../assets/image/koinbisnis-image/iconbisnis-iconMid-5.svg")}
                alt=""
              />
            </p>
            <h4>{t("koinbisnis:koinbisnisWhy.labelFive")}</h4>
            <p>{t("koinbisnis:koinbisnisWhy.descriptionFive")}</p>
            <p>
              <img
                src={require("../../assets/image/koinbisnis-image/iconbisnis-iconMid-6.svg")}
                alt=""
              />
            </p>
            <h4>{t("koinbisnis:koinbisnisWhy.labelSix")}</h4>
            <p>{t("koinbisnis:koinbisnisWhy.descriptionSix")}</p>
          </Col>
        </Row>
      </div>
      <div className="kw-koinBisnis-wrapper__slider">
        <Slider {...settings}>{slides}</Slider>
      </div>
    </div>
  );
}

export default KoinBisnisWhy;
