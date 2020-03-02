import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { Row, Col } from "antd";

function KoinP2pProfil() {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  let checkKoinP2pProfil =
    t("menuHeaders:nameHeaders.nameWealth") === "Pendanaan" ? true : false;

  const sliderImage = [
    {
      image: require("../../assets/image/koinp2p-image/kw-image-risiko-oneSlider.svg"),
      description:
        "koinp2p:koinp2p.koinp2p-content-risiko-profil-sliderOneLabel",
      labelDescription:
        "koinp2p:koinp2p.koinp2p-content-risiko-profil-sliderDescription",
      descriptionValue: "12%~",
      descriptionBottom: "100%"
    },
    {
      image: require("../../assets/image/koinp2p-image/kw-image-risiko-twoSlider.svg"),
      description:
        "koinp2p:koinp2p.koinp2p-content-risiko-profil-sliderOneLabel",
      labelDescription:
        "koinp2p:koinp2p.koinp2p-content-risiko-profil-sliderDescription",
      descriptionValue: "15%~",
      descriptionBottom: "80%"
    },
    {
      image: require("../../assets/image/koinp2p-image/kw-image-risiko-threeSlider.svg"),
      description:
        "koinp2p:koinp2p.koinp2p-content-risiko-profil-sliderOneLabel",
      labelDescription:
        "koinp2p:koinp2p.koinp2p-content-risiko-profil-sliderDescription",
      descriptionValue: "18%~",
      descriptionBottom: "60%"
    },
    {
      image: require("../../assets/image/koinp2p-image/kw-image-risiko-fourSlider.svg"),
      description:
        "koinp2p:koinp2p.koinp2p-content-risiko-profil-sliderOneLabel",
      labelDescription:
        "koinp2p:koinp2p.koinp2p-content-risiko-profil-sliderDescription",
      descriptionValue: "21%~",
      descriptionBottom: "40%"
    },
    {
      image: require("../../assets/image/koinp2p-image/kw-image-risiko-fiveSlider.svg"),
      description:
        "koinp2p:koinp2p.koinp2p-content-risiko-profil-sliderOneLabel",
      labelDescription:
        "koinp2p:koinp2p.koinp2p-content-risiko-profil-sliderDescription",
      descriptionValue: "24%~",
      descriptionBottom: "20%"
    },
    {
      image: require("../../assets/image/koinp2p-image/kw-image-risiko-sixSlider.svg"),
      description:
        "koinp2p:koinp2p.koinp2p-content-risiko-profil-sliderOneLabel",
      labelDescription:
        "koinp2p:koinp2p.koinp2p-content-risiko-profil-sliderDescription",
      descriptionValue: "38%~",
      descriptionBottom: "0%"
    }
  ];

  const slides = sliderImage.map((image, index) => {
    return (
      <Row key={index}>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
          xs={24}
        >
          <img src={image.image} alt="" />
          <p style={{ fontSize: 16, marginTop: 10 }}>{t(image.description)}</p>
          <p
            style={{
              fontSize: 20,
              marginTop: -30,
              fontWeight: 500,
              color: "#071e35"
            }}
          >
            {image.descriptionValue}
          </p>
          <p style={{ fontSize: 16, marginTop: -30 }}>
            {t(image.labelDescription)}
          </p>
          <p
            style={{
              fontSize: 20,
              marginTop: -30,
              fontWeight: 500,
              color: "#071e35"
            }}
          >
            {image.descriptionBottom}
          </p>
        </Col>
      </Row>
    );
  });

  return (
    <div className="kw-koinp2p-profil-wrapper">
      <div className="kw-koinp2p-profil-wrapper__heading-text">
        <h3>{t("koinp2p:koinp2p.koinp2p-content-risiko-profil-label")}</h3>
        <p>{t("koinp2p:koinp2p.koinp2p-content-risiko-profil-description")}</p>
        <div className="kw-koinp2p-profil-wrapper__heading-text__image">
          <img
            src={require(checkKoinP2pProfil
              ? "../../assets/image/koinp2p-image/grade-keuntungan-risiko-koinp2p-koinworks-id.svg"
              : "../../assets/image/koinp2p-image/grade-keuntungan-risiko-koinp2p-koinworks.svg")}
          />
        </div>
        <div className="kw-koinp2p-profil-wrapper__heading-text__slider">
          <Slider {...settings}> {slides}</Slider>
        </div>
      </div>
    </div>
  );
}

export default KoinP2pProfil;
