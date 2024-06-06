import React from "react";
import { CSSTransition } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";

export default function AboutMe() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center" style={{marginTop:'100px'}}>About Me</h1>
      <section id="AboutMe" className="container my-4 about-section">
        <div className="row align-items-center">
          {/* Left content */}
          <CSSTransition
            in={true} // This controls whether the transition is active
            timeout={20000000} // Duration of the animation in milliseconds
            classNames="fade" // Name of the CSS class for transition
            unmountOnExit // Remove the element from the DOM when the transition exits
          >
            <div className="col-12 col-md-6 content-box">
              <h1>Namaste!</h1>
              <p>
                I'm Kora, from France. I'm a yoga teacher, certified yoga
                alliance 500h, trained in India, Indonesia and Nepal. Today, I
                am a nomadic yoga teacher. I teach in different countries and
                give online courses. I am committed to authentically
                transmitting my experience and knowledge and to supporting you
                in the discovery of this transformative practice. My practice
                and teaching are deep and varied. For example: breathing
                techniques, meditation, satsang and asana practice. But, Yoga is
                not just about physical practices, it is not only practiced on
                the mat but in all aspects of life. Btw, what is physical and
                what's not is, for question. No matter what one does, isn't it
                all physical?
              </p>
              <p>
                In more, before become a Yoga teacher, i completing my first
                year of dietetics in France. I am a full health nutritionist
                (certified Dr Yann Rougier). Also, i’m a Renata Franca lymphatic
                drainage massage practitioner, certified in France.
              </p>
              <p>Theses knowledges, I incorporate into a holistic teaching.</p>
              <p>
                As you'll have gathered by now, I've always had a particular
                interest in health and well-being, but not just any health: FULL
                holistic health. What we call full health is a balanced
                lifestyle made up of 5 factors: nutrition, emotions, stress,
                sleep and physical activity. An imbalance in one or more of
                these factors can lead to health problems in the short or long
                term. Discover, how I can help you balance these 5 factors in
                your daily life to find your full health.
              </p>
              <p className="signature">With love,</p>
              <p className="signature">Kora.</p>
            </div>
          </CSSTransition>

          {/* Right content */}
          <CSSTransition
            in={true}
            timeout={2000}
            classNames="fade"
            unmountOnExit
          >
            <>
              <div className="col-12 col-md-6">
                <div className="col-md-12">
                  <img
                    src="./img/yoga3.png"
                    alt="About Me"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-md-12">
                  <button
                    className="btn-github-about mt-2"
                    onClick={() => navigate("/my-journey")}
                  >
                    Know more
                  </button>
                </div>
              </div>
            </>
          </CSSTransition>
        </div>
      </section>
      {/* <HeroSection title="The goal is to be here and now" page="about-section" classname="about-section" /> */}
      {/* <div className="col-md-12 p-3">
        <div className="image-container">
          <img
            src="./img/ho.jpg"
            alt="About Me"
            className="rounded fixed-img"
          />
          <div className="quote">The goal is to be here and now</div>
        </div>
      </div> */}
      <div class="wave-container-about">
        <svg
          class="wave-about"
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
    </>
  );
}
