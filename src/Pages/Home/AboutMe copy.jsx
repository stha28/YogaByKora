import React from "react";
import { CSSTransition } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutMe() {
  return (
    <>
      <h1 className="text-center mt-4">About Me</h1>
      <section id="AboutMe" className="container my-4 about-section">
        <div className="row align-items-center">
          {/* Left content */}
          <CSSTransition
            in={true} // This controls whether the transition is active
            timeout={20000000} // Duration of the animation in milliseconds
            classNames="fade" // Name of the CSS class for transition
            // unmountOnExit // Remove the element from the DOM when the transition exits
          >
            <div className="col-12 col-md-6 content-box">
              <h1>Welcome!</h1>
              <p>
                I'm Kora, from France. I'm a yoga teacher, certified yoga
                alliance 500h, trained in India, Indonesia and Nepal. Today, I
                am a nomadic yoga teacher. I teach in different countries and
                give online courses. I am committed to authentically
                transmitting my experience and knowledge and to supporting you
                in the discovery of this transformative practice. My practice
                and teaching are deep and varied. For example: breathing
                techniques, meditation, satsang and asana practice. But, Yoga
                is not just about physical practices, it is not only practiced
                on the mat but in all aspects of life. Btw, what is physical
                and what's not is, for question. No matter what one does, isn't
                it all physical?
              </p>
              <p>
                In more, before become a Yoga teacher, i completing my first
                year of dietetics in France. I am a full health nutritionist
                (certified Dr Yann Rougier). Also, i’m a Renata Franca
                lymphatic drainage massage practitioner, certified in France.
              </p>
              <p>Theses knowledges, I incorporate into a holistic teaching.</p>
              <p>
                As you'll have gathered by now, I've always had a particular
                interest in health and well-being, but not just any health:
                FULL holistic health. What we call full health is a balanced
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
            <div className="col-12 col-md-6">
              <img
                src="./img/full-story.jpg"
                alt="About Me"
                className="img-fluid rounded"
              />
              <button className="btn-github mt-2">Know more</button>
            </div>
          </CSSTransition>
        </div>
      </section>
    </>
  );
}
