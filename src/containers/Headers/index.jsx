import React from "react";
import { Section } from "./style";

function Headers(props) {
  return (
    <Section>
      <div className="kw-headers-wrapper">
        <div className="kw-headers-wrapper__main">
          <img src={require("../../assets/image/koinworks-white-logo.png")} />
        </div>
      </div>
    </Section>
  );
}

export default Headers;
