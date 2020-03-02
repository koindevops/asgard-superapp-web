import React from "react";
import { Section } from "./style";
import KoinBisnisVisual from "../../components/KoinBisnisKeyVisual";
import KoinBisnisPoint from "../../components/KoinBisnisPoint";
import KoinBisnisWhy from "../../components/KoinBisnisWhy";
import KoinBisnisHowWorks from "../../components/KoinBisnisHowWorks";

function KoinBisnis(props) {
  return (
    <Section>
      <KoinBisnisVisual />
      <KoinBisnisPoint />
      <KoinBisnisWhy />
      <KoinBisnisHowWorks/>
    </Section>
  );
}

export default KoinBisnis;
