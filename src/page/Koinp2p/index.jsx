import React from "react";
import KoinP2pTop from "../../components/KoinP2pTop";
import { Section } from "./style";
import KoinP2pFuturGift from "../../components/KoinP2pFuturGift";
import KoinP2pHowWorks from "../../components/Koinp2pHowWorks";
import KoinP2pSafe from "../../components/KoinP2pSafe";
import KoinP2pStatistic from "../../components/KoinP2pStatistic";
import KoinP2pGetKnow from "../../components/KoinP2pGetKnow";
import KoinP2pProfil from "../../components/KoinP2pProfil";
import KoinP2pTheyHelp from "../../components/KoinP2pTheyHelp";
import KoinP2pFinancialApp from "../../components/KoinP2pFinancialApp";
import KoinP2pTrusted from "../../components/KoinP2pTrusted";
import HomeHowToUseKoinworks from "../../components/HomeHowToUseKoinworks";

function KoinP2p() {
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
      label:
        "koinp2p:koinp2p.koinp2p-content-howToUse-sliderThreeHeading",
      description:
        "koinp2p:koinp2p.koinp2p-content-howToUse-sliderThreeDescription"
    },
    {
      image: require("../../assets/image/koinp2p-image/How to Use P2P - 3.png"),
      label:
        "koinp2p:koinp2p.koinp2p-content-howToUse-sliderFourHeading",
      description:
        "koinp2p:koinp2p.koinp2p-content-howToUse-sliderFourDescription"
    },
    {
      image: require("../../assets/image/koinp2p-image/How to Use P2P - 4.png"),
      label:
        "koinp2p:koinp2p.koinp2p-content-howToUse-sliderFiveHeading",
      description:
        "koinp2p:koinp2p.koinp2p-content-howToUse-sliderFiveDescription"
    },
    {
      image: require("../../assets/image/koinp2p-image/How to Use P2P - 5.png"),
      label:
        "koinp2p:koinp2p.koinp2p-content-howToUse-sliderSixHeading",
      description:
        "koinp2p:koinp2p.koinp2p-content-howToUse-sliderSixDescription"
    },
    {
      image: require("../../assets/image/koinp2p-image/How to Use P2P - 6.png"),
      label:
        "koinp2p:koinp2p.koinp2p-content-howToUse-sliderSevenHeading",
      description:
        "koinp2p:koinp2p.koinp2p-content-howToUse-sliderSevenDescription"
    },
    {
      image: require("../../assets/image/koinp2p-image/How to Use P2P - 7.png"),
      label:
        "koinp2p:koinp2p.koinp2p-content-howToUse-sliderEightHeading"
    }
  ];
  return (
    <Section>
      <KoinP2pTop />
      <KoinP2pFuturGift />
      <KoinP2pHowWorks />
      <KoinP2pSafe />
      <KoinP2pStatistic />
      <KoinP2pGetKnow />
      <KoinP2pProfil />
      <KoinP2pTheyHelp />
      <KoinP2pFinancialApp />
      <KoinP2pTrusted />
      <HomeHowToUseKoinworks
        imageSlider={imageSlider}
        headingTitle="koinp2p:koinp2p.koinp2p-content-howToUse-p2p"
      />
    </Section>
  );
}

export default KoinP2p;
