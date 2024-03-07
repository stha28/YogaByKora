import { useNavigate } from "react-router-dom";
import ScrollToTop from "./Home/ScrollToTop";
import data from "../data/index.json";

export default function CourseSound() {
  return (
    <>
      <ScrollToTop />
      <section id="CourseSound" className="courses--section">
        <div className="courses--content">
          <div className="courses--heading">
            <h1>Sound Healing</h1>
          </div>
          <div className="courses--content--box">
            <div className="course--section--title">
              <h3>How does the Singing bowl work?</h3>
            </div>
            <div className="courses--details">
              <ul>
                <li>Deep relaxation and release of tension</li>
                <li>Improves sleep</li>
                <li>Purifies and harmonizes our emotions and feelings</li>
                <li>Stimulates and strengthens the immune system</li>
                <li>
                  Reduction of stress and stimulation of blood circulation
                </li>
                <li>
                  Changes our old patterns of behavior, habits and ways of
                  thinking
                </li>
                <li>Connection with the higher self</li>
                <li>Helps recover from trauma</li>
                <li>Eliminates blockages and toxins</li>
                <li>Reduce anger</li>
              </ul>
            </div>
            <div className="course--section--title">
              <h3>Cares</h3>
            </div>
            <div className="portfolio--section--container">
              {data?.sound?.map((item, index) => (
                <div key={index} className="portfolio--section--card">
                  <div className="portfolio--section--img">
                    <img src={item.src} alt="Placeholder" />
                  </div>
                  <div className="portfolio--section--card--content">
                    <div>
                      <h2 className="portfolio--section--title">
                        {item.title}
                      </h2>
                      <p className="text-md">Duration: {item.duration}</p>
                      <p className="text-md">Capacity: {item.capacity}</p>
                    </div>
                  </div>
                  <div></div>
                </div>
              ))}
            </div>
            <br />
            <div className="courses--photos">
              <img src="../img/yoga2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
