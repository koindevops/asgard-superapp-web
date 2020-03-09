import React,{ useEffect } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import SliderMediaId from "./SliderMediaId";
import "./style.css"

function HomeSliderMedia() {
  const { t } = useTranslation();
  let checkLanguage =
    t("menuHeaders:nameHeaders.nameWealth") === "Pendanaan" ? true : false;
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 7000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  let logoSwaTechActive = require(checkLanguage
    ? "../../assets/image/logo-swa.png"
    : "../../assets/image/techinasia.png");
  let logoKontanE27Active = require(checkLanguage
    ? "../../assets/image/logo-kontan.png"
    : "../../assets/image/e27-logo.png");
  let logoKompasKrAsiaActive = require(checkLanguage
    ? "../../assets/image/logo-kompas.png"
    : "../../assets/image/logo-krAsia.png");
  let logoInvestorStreetActive = require(checkLanguage
    ? "../../assets/image/investor-daily-logo-colored.png"
    : "../../assets/image/logo-deal-street-asia.png");

  let logoSwaTechNoActive = require(checkLanguage
    ? "../../assets/image/logo-swa-noactive.png"
    : "../../assets/image/grayscale-tech.png");
  let logoKontanE27NoActive = require(checkLanguage
    ? "../../assets/image/kontan-logo.png"
    : "../../assets/image/e27-logo.png");
  let logoKompasKrAsiaNoActive = require(checkLanguage
    ? "../../assets/image/kompas-logo.png"
    : "../../assets/image/krAsia-logo.png");
  let logoInvestorStreetNoActive = require(checkLanguage
    ? "../../assets/image/Investor-Daily-grey-2.png"
    : "../../assets/image/deal-street-asia-logo.png");

  const imagesOne = {
    imageSwa: logoSwaTechActive,
    imageKontan: logoKontanE27NoActive,
    imageKompas: logoKompasKrAsiaNoActive,
    imageInvestor: logoInvestorStreetNoActive
  };

  const imagesTwo = {
    imageSwa: logoSwaTechNoActive,
    imageKontan: logoKontanE27Active,
    imageKompas: logoKompasKrAsiaNoActive,
    imageInvestor: logoInvestorStreetNoActive
  };

  const imagesThree = {
    imageSwa: logoSwaTechNoActive,
    imageKontan: logoKontanE27NoActive,
    imageKompas: logoKompasKrAsiaActive,
    imageInvestor: logoInvestorStreetNoActive
  };

  const imagesFour = {
    imageSwa: logoSwaTechNoActive,
    imageKontan: logoKontanE27NoActive,
    imageKompas: logoKompasKrAsiaNoActive,
    imageInvestor: logoInvestorStreetActive
  };

  useEffect(() => {
    window.addEventListener("resize", () => isMobile());
    return () => {
      window.removeEventListener("resize", () => isMobile());
    };
  });

  function isMobile() {
    let width = window.innerWidth < 825 ? true : false;
    return width;
  }

  return (
    <div className="container" style={{ marginTop: 33 }}>
      <Slider className ="kw-home-slider-to-home-from-home" {...settings}>
        <SliderMediaId
          image={isMobile() ? imagesOne.imageSwa : imagesOne}
          isMobile={isMobile()}
          homeSliderMedia="homeSliderMedia"
          language={"homeLanguage:homeSliderMedia.homeSliderMediaSAW"}
        />
        <SliderMediaId
          image={isMobile() ? imagesTwo.imageKontan : imagesTwo}
          isMobile={isMobile()}
          homeSliderMedia="homeSliderMedia"
          language={"homeLanguage:homeSliderMedia.homeSliderMediaKontan"}
        />
        <SliderMediaId
          image={isMobile() ? imagesThree.imageKompas : imagesThree}
          isMobile={isMobile()}
          homeSliderMedia="homeSliderMedia"
          language={"homeLanguage:homeSliderMedia.homeSliderMediaKompas"}
        />
        <SliderMediaId
          image={isMobile() ? imagesFour.imageInvestor : imagesFour}
          isMobile={isMobile()}
          homeSliderMedia="homeSliderMedia"
          language={"homeLanguage:homeSliderMedia.homeSliderMediaInvestor"}
        />
      </Slider>
    </div>
  );
}

export default HomeSliderMedia;
