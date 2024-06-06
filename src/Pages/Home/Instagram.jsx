import React from "react";

export default function Instagram() {
  return (
    <>
      <div class="wave-container-instagram">
        <svg
          class="wave-instagram"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 310"
        >
          <path
            fill="#a9b9be"
            fill-opacity="1"
            d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,176C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="mt-4" style={{ background: "#a9b9be" }}>
        <div className="container" style={{ background: "#a9b9be" }}>
          <h1 className="text-center">
            Connect with me on Instagram <br />{" "}
            <u>
              <a
                className="text-center"
                style={{ color: "black" }}
                href="https://www.instagram.com/yogabykora"
              >
                @yogabykora
              </a>
            </u>
          </h1>

          <div className="grid mt-4">
            <a href="https://www.instagram.com/p/C6BRz8mrYJo/" target="_blank">
              <img src="../img/co.jpg" alt="Post 1" />
              <i className="fas fa-play play-icon"></i>
            </a>
            <a href="https://www.instagram.com/p/CvbVc8FL5dQ/" target="_blank">
              <img src="../img/rishikesh3.jpg" alt="Post 1" />
              <i className="fas fa-play play-icon"></i>
            </a>
            <a href="https://www.instagram.com/p/Czt2FOirhKZ/" target="_blank">
              <img src="../img/ins1.jpg" alt="Post 1" />
              <i className="fas fa-play play-icon"></i>
            </a>
            <a href="https://www.instagram.com/p/C6fYuaerOxf/" target="_blank">
              <img src="../img/ins2.jpg" alt="Post 1" />
              <i className="fas fa-play play-icon"></i>
            </a>
          </div>
        </div>
        <div className="col-md-12 p-4"></div>
      </div>
    </>
  );
}
