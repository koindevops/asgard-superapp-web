import { Modal } from "antd";
import React, { useState } from "react";

function VideoLink(props) {
  const [showGalleryVideo, setShowGalleryVideo] = useState(false);
  function showHideVideo() {
    setShowGalleryVideo(!showGalleryVideo);
  }

  const { image, video } = props;

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
            title="video-koinworks"
              width="560"
              height="315"
              src={video}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </Modal>
      ) : (
        <span style={{ cursor: "pointer" }} onClick={() => showHideVideo()}>
          <img src={image} alt="" style={{ width: "100%" }} />
        </span>
      )}
    </React.Fragment>
  );
}

export default VideoLink;
