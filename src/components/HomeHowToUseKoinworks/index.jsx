import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function HomeHowToUseKoinworks(props) {
  const { headingTitle, imageSlider } = props;
  const { t } = useTranslation();

  const slides = imageSlider.map((image, index) => {
    return (
      <Row key={index}>
        <Col xs={24} lg={8}>
          <img src={image.image} alt="" style={{ width: "100%" }} />
        </Col>
        <Col lg={3} />
        <Col xs={24} lg={13}>
          <h4>{t(image.label)}</h4>
          <p>{t(image.description)}</p>

          <div
            style={{
              display: image.imagePlayStore ? "flex" : "none",
              justifyContent: "space-evenly"
            }}
          >
            <img src={image.imagePlayStore} alt="" />
            <img src={image.imageAppStore} alt="" />
          </div>
        </Col>
      </Row>
    );
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div className="kw-how-toUse-slider-dots">
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="kw-home-how-to-use-koinworks-wrapper">
      <div className="container">
        <div className="kw-home-how-to-use-koinworks">
          <Row>
            <Col lg={7}>
              <h3 className="kw-home-how-to-use-koinworks__label-text">
                {t(headingTitle)}
              </h3>
            </Col>
            <Col lg={17}>
              <div className="kw-home-how-to-use-koinworks__slider-image">
                <Slider {...settings}>{slides}</Slider>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HomeHowToUseKoinworks;
