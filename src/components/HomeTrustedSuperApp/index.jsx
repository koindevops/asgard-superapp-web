import React, { useState } from "react";
import { Row, Col, Modal } from "antd";
import "./style.css";
import { useTranslation } from "react-i18next";

function HomeTrustedSuperApp() {
  const [showGalleryVideo, setShowGalleryVideo] = useState(false);
  const { t } = useTranslation();

  function showHideVideo() {
    setShowGalleryVideo(!showGalleryVideo);
  }

  function itemVideo() {
    return (
      <React.Fragment>
        {showGalleryVideo ? (
          <Modal
            wrapClassName="modal-video-slider"
            title=" "
            visible={showGalleryVideo}
            onCancel={showHideVideo}
            centered
          >
            <div className="video-wrapper">
              <iframe
                title="koinworks-video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/D1N34eRVkqM"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Modal>
        ) : (
          <span style={{ cursor: "pointer" }} onClick={() => showHideVideo()}>
            <img
              src={require("../../assets/image/first-super-financial-app.png")}
              alt=""
              className="kw-home-trustedSuperApp"
            />
          </span>
        )}
      </React.Fragment>
    );
  }
  return (
    <div className="container-fluid kw-home-trusted-super-app-wrapper">
      <Row>
        <Col sm={12} lg={12}>
          <div className="kw-home-trusted-super-app">
            <h3>{t("homeLanguage:homeTrustedSuperApp.homeTrustedHeading")}</h3>
            <p>{t("homeLanguage:homeTrustedSuperApp.homeTrustedParagraph")}</p>
            <a href="https://koinworks.com/super-app/fitur/" rel="noopener noreferrer" target="_blank">
              <span>{t("common:leanMore.common_leanmore")}</span>
            </a>
          </div>
        </Col>
        <Col sm={12} lg={12}>
          {itemVideo()}
        </Col>
      </Row>
    </div>
  );
}

export default HomeTrustedSuperApp;
