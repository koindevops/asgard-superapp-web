import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

function HomeStastistikSlider() {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  let logoTkb90 = require("../../assets/image/tkb90.svg");
  let logoTotalLoan = require("../../assets/image/total-loan.svg");
  let logoTotalLoan2020 = require("../../assets/image/total-loan-2020.svg");
  let logoTotalOutsanding = require("../../assets/image/total-outsanding.svg");
  let logoIndividualBorrowers = require("../../assets/image/individual-borrowers.svg");
  let logoInstitutionalBorrowers = require("../../assets/image/institutional-borrowers.svg");
  let logoActiveIndividual = require("../../assets/image/active-individual.svg");
  let logoActiveInstitutional = require("../../assets/image/active-institutional.svg");

  const imagesSlider = [
    {
      imageSliderMedia: logoTkb90,
      imageSliderHeading:
        "homeLanguage:homeStatistikKoinworks.homeStatistikTkb",
      imageSliderParagraph:
        "homeLanguage:homeStatistikKoinworks.homeStatistikTkbText"
    },
    {
      imageSliderMedia: logoTotalLoan,
      imageSliderHeading: "Rp1.162.963.892.182",
      imageSliderParagraph:
        "homeLanguage:homeStatistikKoinworks.homeStatisLoanIndividual"
    },
    {
      imageSliderMedia: logoTotalLoan2020,
      imageSliderHeading: "Rp591,978,260,000.00",
      imageSliderParagraph:
        "homeLanguage:homeStatistikKoinworks.homeStatisTotalLoanThisYear"
    },
    {
      imageSliderMedia: logoTotalOutsanding,
      imageSliderHeading: "Rp233,528,266,507.00",
      imageSliderParagraph:
        "homeLanguage:homeStatistikKoinworks.homeStatisTotalOutsandingLoan"
    },
    {
      imageSliderMedia: logoIndividualBorrowers,
      imageSliderHeading: "homeLanguage:homeStatistikKoinworks.homeStatisUser",
      imageSliderParagraph:
        "homeLanguage:homeStatistikKoinworks.homeStatisInvidiual"
    },
    {
      imageSliderMedia: logoInstitutionalBorrowers,
      imageSliderHeading:
        "homeLanguage:homeStatistikKoinworks.homeStatisUserInstitutional",
      imageSliderParagraph:
        "homeLanguage:homeStatistikKoinworks.homeStatisInstitusional"
    },
    {
      imageSliderMedia: logoActiveIndividual,
      imageSliderHeading:
        "homeLanguage:homeStatistikKoinworks.homeStatisUserActiveIndividual",
      imageSliderParagraph:
        "homeLanguage:homeStatistikKoinworks.homeStatisActiveIndividual"
    },
    {
      imageSliderMedia: logoActiveInstitutional,
      imageSliderHeading: "homeLanguage:homeStatistikKoinworks.homeStatisUserUsed",
      imageSliderParagraph:
        "homeLanguage:homeStatistikKoinworks.homeStatisInstitutionalActive"
    }
  ];

  const slides = imagesSlider.map((image,index) => {
    return (
      <div key={index} className="kw-home-slider-media">
        <img
          src={image.imageSliderMedia}
          alt="koinworks-slider-media"
          style={{ margin: "0 auto" }}
        />
        <h4 className="kw-home-slider-media__statistik-heading">
          {t(image.imageSliderHeading)}
        </h4>
        <p className="kw-home-slider-media__statistik-pargraph">
          {t(image.imageSliderParagraph)}
        </p>
      </div>
    );
  });

  return (
    <div className="container-fluid home-stastistik-slider-wrapper">
      <h3>
        {t("homeLanguage:homeStatistikKoinworks.homeStatistikKoinworksLabel")}{" "}
        <span style={{ fontSize: 28 }}>(Juli 2019)</span>
      </h3>
      <div className="home-stastistik-slider-wrapper__slider">
        <Slider {...settings}>{slides}</Slider>
      </div>
    </div>
  );
}

export default HomeStastistikSlider;
