import data from "../../data/index.json";
import { useNavigate } from "react-router-dom";

export default function MySkills() {
  const navigate = useNavigate();

  const navigateToMyJourney = () => {
    navigate("/my-journey");
  };

  return (
    <section id="Journey" className="journey--section">
      {/* <div className="hero--section--content--box about--section--box"> */}
      <div className="journey--section--content">
        <p className="hero--section-description">
          After completing my first year of dietetics, I am a full health
          nutritionist (certified Dr Yann Rougier). This knowledge I incorporate
          into a holistic teaching.
        </p>
        <p className="hero--section-description">
          At the same time, I'm also a Renata Franca lymphatic drainage massage
          practitioner. As you'll have gathered by now, I've always had a
          particular interest in health and well-being, but not just any health:
          FULL holistic health. What we call full health is a balanced lifestyle
          made up of 5 factors: nutrition, emotions, stress, sleep and physical
          activity. An imbalance in one or more of these factors can lead to
          health problems in the short or long term.
        </p>
        <p className="hero--section-description">
          Discover, how I can help you balance these 5 factors in your daily
          life to find your full health,
        </p>
        <p className="hero--section-description">See you soon on the mat.</p>
        <p className="hero--section-description">With love,</p>
        <p className="hero--section-description">Kora.</p>
      </div>
      {/* </div> */}
      <div className="journey--section--img">
        <button
          onClick={() => navigateToMyJourney()}
          className="journey--section--button"
        >
          Full Story
        </button>
      </div>
    </section>
  );
}
