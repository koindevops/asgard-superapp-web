import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

function KoinP2pTrusted() {
  const { t } = useTranslation();
  const imageEcommerce = [
    {
      image: require("../../assets/image/koinp2p-image/koinp2p-image-tokopedia.png")
    },
    {
      image: require("../../assets/image/koinp2p-image/koinp2p-image-bukalapak.png")
    },
    {
      image: require("../../assets/image/koinp2p-image/koinp2p-image-shopee.png"),
      keyIndex: 2
    },
    {
      image: require("../../assets/image/koinp2p-image/koinp2p-image-lazada.png"),
      keyIndex: 3
    },
    {
      image: require("../../assets/image/koinp2p-image/koinp2p-image-jne.png")
    },
    {
      image: require("../../assets/image/koinp2p-image/koinp2p-image-moka.png")
    }
  ];
  return (
    <div className="container kw-koinP2p-trusted">
      <h3>{t("koinp2p:koinp2p.koinp2p-content-trusted-heading")}</h3>
      <p>{t("koinp2p:koinp2p.koinp2p-content-trusted-paragraph")}</p>
      <Row>
        {imageEcommerce.map((image, index) => {
          return (
            <Col key={index} xs={12} md={4}>
              <img
                src={image.image}
                alt=""
                style={{ marginTop: image.keyIndex && -20 }}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default KoinP2pTrusted;
