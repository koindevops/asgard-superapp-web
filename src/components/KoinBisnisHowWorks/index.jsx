import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";
import Slider from "react-slick";

function KoinBisnisHowWorks(props) {
  const { t } = useTranslation();

  let checkKoinBisnisHowWorks =
    t("menuHeaders:nameHeaders.nameWealth") === "Pendanaan" ? true : false;

  const koinBisnis = [
    {
      description: "koinbisnis:koinbisnisHowWorks.description-One",
      image: require(checkKoinBisnisHowWorks
        ? "../../assets/image/koinbisnis-image/koinbisnis-caraKerjaSlider/Cara-kerja-koinbisnis-1.png"
        : "../../assets/image/koinbisnis-image/koinbisnis-caraKerjaSlider/bisnis-1.png")
    },
    {
      description: "koinbisnis:koinbisnisHowWorks.description-Two",
      image: require("../../assets/image/koinbisnis-image/koinbisnis-caraKerjaSlider/Cara-kerja-koinbisnis-2.png")
    },
    {
      description: "koinbisnis:koinbisnisHowWorks.description-Three",
      image: require("../../assets/image/koinbisnis-image/koinbisnis-caraKerjaSlider/Cara-kerja-koinbisnis-3.png")
    },
    {
      description: "koinbisnis:koinbisnisHowWorks.description-Four",
      image: require(checkKoinBisnisHowWorks
        ? "../../assets/image/koinbisnis-image/koinbisnis-caraKerjaSlider/Cara-kerja-koinbisnis-4.png"
        : "../../assets/image/koinbisnis-image/koinbisnis-caraKerjaSlider/bisnis-4.png")
    },
    {
      description: "koinbisnis:koinbisnisHowWorks.description-Five",
      image: require(checkKoinBisnisHowWorks
        ? "../../assets/image/koinbisnis-image/koinbisnis-caraKerjaSlider/Cara-kerja-koinbisnis-5.png"
        : "../../assets/image/koinbisnis-image/koinbisnis-caraKerjaSlider/bisnis-5.png")
    },
    {
      description: "koinbisnis:koinbisnisHowWorks.description-Six",
      image: require(checkKoinBisnisHowWorks
        ? "../../assets/image/koinbisnis-image/koinbisnis-caraKerjaSlider/Cara-kerja-koinbisnis-6.png"
        : "../../assets/image/koinbisnis-image/koinbisnis-caraKerjaSlider/bisnis-6.png")
    },
    {
      description: "koinbisnis:koinbisnisHowWorks.description-Seven",
      image: require(checkKoinBisnisHowWorks
        ? "../../assets/image/koinbisnis-image/koinbisnis-caraKerjaSlider/Cara-kerja-koinbisnis-7.png"
        : "../../assets/image/koinbisnis-image/koinbisnis-caraKerjaSlider/bisnis-7.png")
    }
  ];

  const slides = koinBisnis.map((koin, index) => {
    return (
      <React.Fragment key={index}>
        <img src={koin.image} style={{ width: "100%" }} alt="" />
        <div style={{ padding: 15 }}>
          <p style={{ textAlign: "center", fontSize: 17, color: " #566068" }}>
            <strong> {index + 1}</strong> {t(koin.description)}
          </p>
        </div>
      </React.Fragment>
    );
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container-fluid">
      <div className="kw-koinBisnisHowWorks-wrapper">
        <h3>{t("koinbisnis:koinbisnisHowWorks.heading")}</h3>
        <div className="kw-koinBisnisHowWorks-wrapper__noSlider">
          <Row>
            <Col md={16}>
              <img
                src={require(checkKoinBisnisHowWorks
                  ? "../../assets/image/koinbisnis-image/cara-kerja-koinbisnis-bahasa-indonesia.png"
                  : "../../assets/image/koinbisnis-image/flow-koinbisnis.png")}
                style={{ width: "100%" }}
                alt=""
              />
            </Col>
            <Col md={8}>
              <ol>
                {koinBisnis.map((desc, i) => {
                  return <li key={i}>{t(desc.description)}</li>;
                })}
              </ol>
            </Col>
          </Row>
        </div>
        <div className="kw-koinBisnisHowWorks-wrapper__slider">
          <Slider {...settings}>{slides}</Slider>
        </div>
      </div>
    </div>
  );
}

export default KoinBisnisHowWorks;
