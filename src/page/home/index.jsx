import React from "react";
import { Section } from "./style";
import HomeBackgroundContent from "../../components/HomeBackgroundContent";
import HomeSliderMedia from "../../components/HomeSliderMedia";
import HomeTrustedSuperApp from "../../components/HomeTrustedSuperApp";
import HomeStastistikSlider from "../../components/HomeStastistikSlider";
import HomeFinancialChoices from "../../components/HomeFinancialChoices";
import HomeProductKoinworks from "../../components/HomeProductKoinworks";
import HomeHowToUseKoinworks from "../../components/HomeHowToUseKoinworks";

function Home() {
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
      image: require("../../assets/image/how-to-use-homepage3.png"),
      label:
        "homeLanguage:homeHowToUseKoinworks.homeHowToUseKoinworksHeadingThree",
      description:
        "homeLanguage:homeHowToUseKoinworks.homeHowToUseKoinworksDescriptionSlideThree"
    },
    {
      image: require("../../assets/image/how-to-use-homepage4.png"),
      label:
        "homeLanguage:homeHowToUseKoinworks.homeHowToUseKoinworksHeadingFour"
    }
  ];
  return (
    <Section>
      <HomeBackgroundContent />
      <HomeSliderMedia />
      <HomeTrustedSuperApp />
      <HomeStastistikSlider />
      <HomeFinancialChoices />
      <HomeProductKoinworks />
      <HomeHowToUseKoinworks
        headingTitle="homeLanguage:homeHowToUseKoinworks.homeHowToUseKoinworksHeading"
        imageSlider={imageSlider}
      />
    </Section>
  );
}

export default Home;
