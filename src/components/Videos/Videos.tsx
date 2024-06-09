import React from "react";
import "./videos.scss";

const Videos = () => {
  return (
    <>
      <section className="videos py-5">
        <div className="container">
          <div className="videos-container">
            <div className="row">
              <div className="col-12 hero-video mb-5">
                <div className="hero-video-container">
                  <iframe
                    src="https://www.youtube.com/embed/1rYI_moVddA?si=txmuHWTet_OQdA2v"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6 col-12 alt-videos mb-lg-0 mb-5">
                <iframe
                  width="480"
                  height="240"
                  src="https://www.youtube.com/embed/MXWn7HL251o?si=ewfkOESmVrOCUyh4"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-lg-6 col-12 alt-videos mb-lg-0 mb-5">
                <iframe
                  width="480"
                  height="240"
                  src="https://www.youtube.com/embed/WsIauFcSTnw?si=badadLhoHpmmYAKF"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Videos;
