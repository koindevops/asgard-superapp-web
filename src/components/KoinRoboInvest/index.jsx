import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

function KoinRoboInvest(props) {
  const { t } = useTranslation();

  const koinRoboInvestData = [
    {
      image: require("../../assets/image/koinrobo-image/koinrobo-made-in-indonesia.png"),
      cardLabel: "koinrobo:koinrobo.koinrobo-invest-cardLabelOne",
      cardParagraph: "koinrobo:koinrobo.koinrobo-invest-cardParagraphOne"
    },
    {
      image: require("../../assets/image/koinrobo-image/female-led-koinrobo.png"),
      cardLabel: "koinrobo:koinrobo.koinrobo-invest-cardLabelTwo",
      cardParagraph: "koinrobo:koinrobo.koinrobo-invest-cardParagraphTwo"
    },
    {
      image: require("../../assets/image/koinrobo-image/best-performing-koinrobo.png"),
      cardLabel: "koinrobo:koinrobo.koinrobo-invest-cardLabelThree",
      cardParagraph: "koinrobo:koinrobo.koinrobo-invest-cardParagraphThree"
    },
    {
      image: require("../../assets/image/koinrobo-image/top-up-loan-koinrobo.png"),
      cardLabel: "koinrobo:koinrobo.koinrobo-invest-cardLabelFour",
      cardParagraph: "koinrobo:koinrobo.koinrobo-invest-cardParagraphFour"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const slidesContent = koinRoboInvestData.map((image, index) => {
    return (
      <Col key={index} md={6}>
        <div className="kw-robo-invest-wrapper__card">
          <img src={image.image} alt="" />
          <div className="kw-robo-invest-wrapper__box-text">
            <h4>{t(image.cardLabel)}</h4>
            <p>{t(image.cardParagraph)}</p>
          </div>
        </div>
      </Col>
    );
  });

  return (
    <div className="container-fluid kw-robo-invest-wrapper">
      <h3>{t("koinrobo:koinrobo.koinrobo-invest-heading")}</h3>
      <Row className="kw-robo-invest-wrapper__sliderOf">
        {slidesContent}
        </Row>
      <Row className="kw-robo-invest-wrapper__sliderOn">
        <Slider {...settings}>
          {slidesContent}
          </Slider>
      </Row>
    </div>
  );
}

export default KoinRoboInvest;
