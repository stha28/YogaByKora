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
        <h1 className="skills-section--heading">My Journey</h1>
        <p className="hero--section-description">
          I’m Kora from France and graduated in international business, I worked
          for more than 7 years in the banking field. Then, in search of
          adventure and discovery at a painful time in my life, I flew to the
          other side of the world. These months of travel have been
          transformative. I have deepened my personal practice and knowledge of
          yoga, much further than asanas. This is how I knew that yoga was much
          more than a passion, but a lifestyle and then, my vocation. After more
          than 5 years of personal practice, I decided to train in Indonesia, in
          Bali. I had the opportunity to be trained by local teachers who made
          this training so enriching professionally as well as personally. When
          I returned to France, I taught for a yoga center and associations.
          Then, I quickly continued on my path, across the world. An eternal
          student, I continued to learn by following training in India and Nepal
          where I found my refuge, my safe place. Today, I am a nomadic yoga
          teacher. I teach in different countries and give online courses. I am
          committed to authentically transmitting my experience and knowledge
          and to supporting you in the discovery of this transformative
          practice. My practice and my teaching are deep and multiple: breathing
          techniques, meditation, satsang and asanas as well. I teach with the
          flow of the day, of the present moment accompanied by my Tibetan
          bowls. Yoga is not just about physical practices, it is not only
          practiced on the mat but in all aspects of life. But what’s physical
          and what’s not is up for question. No matter what one does, isn’t it
          all physical?
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
