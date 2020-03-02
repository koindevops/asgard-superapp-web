import React from "react";
import { Section } from "./style";
import KoinRoboKeyVisual from "../../components/KoinRoboKeyVisual";
import KoinRoboStatistik from "../../components/KoinRoboStatistik";
import KoinRoboFeatures from "../../components/KoinRoboFeatures";
import KoinRoboMakingSocial from "../../components/KoinRoboMakingSocial";
import KoinRoboInvest from "../../components/KoinRoboInvest";
import HomeSliderMedia from "../../components/HomeSliderMedia";
import KoinP2pTrusted from "../../components/KoinP2pTrusted";
import HomeHowToUseKoinworks from "../../components/HomeHowToUseKoinworks";
import KoinRoboFinancialApp from "../../components/KoinRoboFinancialHero";

function KoinRobo() {
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
      image: require("../../assets/image/koinp2p-image/How to Use P2P - 2.png"),
      label: "koinp2p:koinp2p.koinp2p-content-howToUse-sliderThreeHeading",
      description:
        "koinp2p:koinp2p.koinp2p-content-howToUse-sliderThreeDescription"
    },
    {
      image: require("../../assets/image/koinrobo-image/How-to-Use-Robo-3.png"),
      label: "koinrobo:koinrobo.koinrobo-howToUseLabelFour",
      description: "koinrobo:koinrobo.koinrobo-descriptionFour"
    },
    {
      image: require("../../assets/image/koinrobo-image/How-to-Use-Robo-4.png"),
      label: "koinrobo:koinrobo.koinrobo-howToUseLabelFive",
      description: "koinrobo:koinrobo.koinrobo-descriptionFive"
    },
    {
      image: require("../../assets/image/koinrobo-image/How-to-Use-Robo-5.png"),
      label: "koinrobo:koinrobo.koinrobo-howToUseLabelSix",
      description: "koinrobo:koinrobo.koinrobo-descriptionSix"
    },
    {
      image: require("../../assets/image/koinp2p-image/How to Use P2P - 7.png"),
      label: "koinp2p:koinp2p.koinp2p-content-howToUse-sliderEightHeading"
    }
  ];
  return (
    <Section>
      <div className="kw-koinRobo-wrapper">
        <KoinRoboKeyVisual />
        <KoinRoboStatistik />
        <KoinRoboFeatures />
        <KoinRoboMakingSocial />
        <KoinRoboInvest />
        <KoinRoboFinancialApp />
        <HomeSliderMedia />
        <div style={{ marginTop: 130 }}>
          <KoinP2pTrusted />
        </div>
        <HomeHowToUseKoinworks
          imageSlider={imageSlider}
          headingTitle="koinrobo:koinrobo.koinrobo-howToUse"
        />
      </div>
    </Section>
  );
}

export default KoinRobo;
