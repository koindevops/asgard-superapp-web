import React from "react";
import { Section } from "./style";
import KoinBisnisVisual from "../../components/KoinBisnisKeyVisual";
import KoinBisnisPoint from "../../components/KoinBisnisPoint";
import KoinBisnisWhy from "../../components/KoinBisnisWhy";
import KoinBisnisHowWorks from "../../components/KoinBisnisHowWorks";
import HomeSliderMedia from "../../components/HomeSliderMedia";
import HomeHowToUseKoinworks from "../../components/HomeHowToUseKoinworks";
import KoinP2pTrusted from "../../components/KoinP2pTrusted";
import KoinBisnisLoanInterested from "../../components/KoinBisnisLoanInterested";
import KoinBisnisInspiring from "../../components/KoinBisnisInspiring";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";

function KoinBisnis(props) {
  const { t } = useTranslation();

  let checkKoinBisnis =
    t("menuHeaders:nameHeaders.nameWealth") === "Pendanaan" ? true : false;

  const imageSlider = [
    {
      image: require("../../assets/image/how-to-use-homepage1.png"),
      label:
        "homeLanguage:homeHowToUseKoinworks.homeHowToUseKoinworksParagphSlideOne",
      description:
        "homeLanguage:homeHowToUseKoinworks.homeHowToUseKoinworksDescriptionSlideOne",
      imagePlayStore: require("../../assets/image/google-play-download.svg"),
      imageAppStore: require("../../assets/image/app-store-download.svg")
    },
    {
      image: require("../../assets/image/how-to-use-homepage2.png"),
      label:
        "homeLanguage:homeHowToUseKoinworks.homeHowToUseKoinworksHeadingTwo",
      description:
        "homeLanguage:homeHowToUseKoinworks.homeHowToUseKoinworksDescriptionSlideTwo"
    },
    {
      image: require("../../assets/image/koinbisnis-image/How-to-Use-Bisnis-2.png"),
      label: "koinbisnis:koinbisnisInspiring.slideThreeHeading",
      description: "koinbisnis:koinbisnisInspiring.descriptionOne"
    },
    {
      image: require("../../assets/image/koinbisnis-image/How-to-Use-Bisnis-3.png"),
      label: "koinbisnis:koinbisnisInspiring.slideFourHeading",
      description: "koinbisnis:koinbisnisInspiring.descriptionFour"
    },
    {
      image: require("../../assets/image/koinbisnis-image/How-to-Use-Bisnis-4.png"),
      label: "koinbisnis:koinbisnisInspiring.slideFiveHeading",
      description: "koinbisnis:koinbisnisInspiring.descriptionFive"
    },
    {
      image: require("../../assets/image/koinp2p-image/How to Use P2P - 7.png"),
      label: "koinp2p:koinp2p.koinp2p-content-howToUse-sliderEightHeading"
    }
  ];
  return (
    <Section>
      <Helmet>
        <title>
          {checkKoinBisnis
            ? "Tingkatkan Pertumbuhan Bisnis"
            : "Boost Your Business Growth to the Next Level"}
        </title>
      </Helmet>
      <KoinBisnisVisual />
      <KoinBisnisPoint />
      <KoinBisnisWhy />
      <KoinBisnisHowWorks />
      <KoinBisnisLoanInterested />
      <KoinBisnisInspiring />
      <HomeSliderMedia />
      <div style={{ marginTop: 130 }}>
        <KoinP2pTrusted />
      </div>
      <HomeHowToUseKoinworks
        imageSlider={imageSlider}
        headingTitle="koinbisnis:koinbisnis.how-to-use"
      />
    </Section>
  );
}

export default KoinBisnis;
