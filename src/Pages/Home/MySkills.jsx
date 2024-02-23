import data from "../../data/index.json";
import { useNavigate } from "react-router-dom";

export default function MySkills() {


  const navigate = useNavigate();

  const navigateToMyJourney = () =>{
    navigate('/my-journey');
  }
  
  return (
    <section id="Journey" className="journey--section">
      {/* <div className="hero--section--content--box about--section--box"> */}
        <div className="journey--section--content">
          <h1 className="skills-section--heading">My Journey</h1>
          <p className="hero--section-description">
          I'm Kora, from Marseille in the south of France. I'm a yoga teacher, certified yoga alliance 500h, trained in India, Indonesia, Nepal and France.
          But that's not all. After completing my first year of a BTS in dietetics, and following a career change in 2019, I became a full health nutrition coach certified by Dr Yann Rougier. At the same time, I'm also a Renata Franca lymphatic drainage massage practitioner.
          As you'll have gathered by now, I've always had a particular interest in wellbeing and health, but not just any health: FULL health.
          What we call full health is a balanced lifestyle made up of 5 factors: nutrition, emotions, stress, sleep and physical activity.                          
          An imbalance in one or more of these factors can lead to health problems in the short or long term.
          As you'll have gathered by now, I've always had a particular interest in wellbeing and health, but not just any health: FULL health.
          What we call full health is a balanced lifestyle made up of 5 factors: nutrition, emotions, stress, sleep and physical activity.                          
          An imbalance in one or more of these factors can lead to health problems in the short or long term.
          </p>
        </div>
      {/* </div> */}
      <div className="journey--section--img">
        {/* <div>
          <img src="./img/about-me.png" alt="About Me" />
        </div> */}
          <button onClick= {()=>navigateToMyJourney()} className="journey--section--button">Full Story</button>
      </div>
    </section>
  );
}
