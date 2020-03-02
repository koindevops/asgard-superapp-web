import React from "react";
import { useTranslation } from "react-i18next";

function SliderMediaId(props) {
  const { t } = useTranslation();
  const {
    language,
    image,
    isMobile
  } = props;

  return (
    <div className="kw-home-slider-media">
        <p className="kw-home-slider-media__home-slider-media">{t(language)}</p>
      <div className="container kw-home-slider-media__wrapper">
        {isMobile ? (
          <img src={image} alt="" />
        ) : (
          <React.Fragment>
            <img src={image.imageSwa} alt="" />
            <img src={image.imageKontan} alt="" />
            <img src={image.imageKompas} alt="" />
            <img src={image.imageInvestor} alt="" />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default SliderMediaId;
