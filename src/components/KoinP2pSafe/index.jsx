import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";
import Slider from "react-slick";

function KoinP2pSafe(props) {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const imageSlider = [
    {
      image: require("../../assets/image/KoinP2pSafe- Kredibel & Transparan.png"),
      labelDescription: "koinp2p:koinp2p.koinp2p-content-safe-labelDescription",
      description: "koinp2p:koinp2p.koinp2p-content-safe-descriptionKredibel"
    },
    {
      image: require("../../assets/image/KoinP2pSafe- Advance Kredit Scoring.png"),
      labelDescription:
        "koinp2p:koinp2p.koinp2p-content-safe-labelDescriptionAdvance",
      description: "koinp2p:koinp2p.koinp2p-content-safe-descriptionPenilaian"
    },
    {
      image: require("../../assets/image/KoinP2pSafe- Insurance Coverage.png"),
      labelDescription: "koinp2p:koinp2p.koinp2p-content-safe-labelInsurance",
      description: "koinp2p:koinp2p.koinp2p-content-safe-descriptionInsurance"
    },
    {
      image: require("../../assets/image/KoinP2pSafe- Provision Fund.png"),
      labelDescription: "koinp2p:koinp2p.koinp2p-content-safe-labelProvision",
      description: "koinp2p:koinp2p.koinp2p-content-safe-descriptionProvision"
    }
  ];

  const slides = imageSlider.map((image, index) => {
    return (
      <Row key={index}>
        <Col xs={24} style={{ textAlign: "center" }}>
          <img src={image.image} alt="" />
          <h4>{t(image.labelDescription)}</h4>
          <p>{t(image.description)}</p>
        </Col>
      </Row>
    );
  });
  return (
    <div className="container-fluid">
      <div className="kw-koin-p2p-safe-wrapper">
        <h3>{t("koinp2p:koinp2p.koinp2p-content-safe-label")}</h3>
        <div className="kw-koin-p2p-safe-wrapper__content-noSlider">
          <Row>
            <Col md={6}>
              <img
                src={require("../../assets/image/KoinP2pSafe- Kredibel & Transparan.png")}
                style={{ maxWidth: 100 }}
                alt=""
              />
              <h4>
                {t("koinp2p:koinp2p.koinp2p-content-safe-labelDescription")}
              </h4>
              <p>
                {t("koinp2p:koinp2p.koinp2p-content-safe-descriptionKredibel")}
              </p>
            </Col>
            <Col md={6}>
              <img
                src={require("../../assets/image/KoinP2pSafe- Advance Kredit Scoring.png")}
                style={{ maxWidth: 100 }}
                alt=""
              />
              <h4>
                {t(
                  "koinp2p:koinp2p.koinp2p-content-safe-labelDescriptionAdvance"
                )}
              </h4>
              <p>
                {t("koinp2p:koinp2p.koinp2p-content-safe-descriptionPenilaian")}
              </p>
            </Col>
            <Col md={6}>
              <img
                src={require("../../assets/image/KoinP2pSafe- Insurance Coverage.png")}
                style={{ maxWidth: 100 }}
                alt=""
              />
              <h4>
                {t("koinp2p:koinp2p.koinp2p-content-safe-labelInsurance")}
              </h4>
              <p>
                {t("koinp2p:koinp2p.koinp2p-content-safe-descriptionInsurance")}
              </p>
            </Col>
            <Col md={6}>
              <img
                src={require("../../assets/image/KoinP2pSafe- Provision Fund.png")}
                style={{ maxWidth: 100 }}
                alt=""
              />
              <h4>
                {t("koinp2p:koinp2p.koinp2p-content-safe-labelProvision")}
              </h4>
              <p>
                {t("koinp2p:koinp2p.koinp2p-content-safe-descriptionProvision")}
              </p>
            </Col>
          </Row>
        </div>
        <div className="kw-koin-p2p-safe-wrapper__content-slider">
          <Slider
            className="kw-koin-p2p-safe-wrapper__content-slider__button"
            {...settings}
          >
            {slides}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default KoinP2pSafe;
