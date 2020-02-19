import React from "react";
import { Section } from "./style";
import { Row, Col } from "antd";
import IconOjk from "../../assets/image/Licensed-by-OJK-EN-white.png"


function Home(props) {
  return (
    <Section>
      <div className="kw-home-background" >
       <Row>
           <Col lg={24}>
               <div className="kw-home-background__image">
               <img src={IconOjk}/>
               </div>
           </Col>
       </Row>
      </div>
    </Section>
  );
}

export default Home;
