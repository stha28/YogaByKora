import data from "../../data/index.json";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyPortfolio() {
  const navigate = useNavigate();

  const navigateToCourse = (path) => {
    navigate("/courses/" + path);
  };
  return (
    <>
      <ScrollToTop />
      <section className="container my-4 about-section">
          <div className="row align-items-center">
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <img
                src="../img/yoga-course.jpg"
                className="img-fluid rounded"
                alt="Yoga Image"
              />
            </div>
            <div className="col-md-4 position-relative">
              <div className="text-box">
                <h2>Classic Yoga Fusion</h2>
                <p>
                  Immerse yourself in the timeless essence of yoga, ranging from
                  the rhythmic flow of Vinyasa to the serene calm of Yin and the
                  foundational practices of Hatha. A harmonious blend for all
                  seeking a traditional yet diverse yoga experience. Immerse
                  yourself in the timeless essence of yoga, ranging from the
                  rhythmic flow of Vinyasa to the serene calm of Yin and the
                  foundational practices of Hatha. A harmonious blend for all
                  seeking a traditional yet diverse yoga experience.
                </p>
                <button className="btn-github-portfolio">Know more</button>
              </div>
            </div>
          </div>
        </section>
        <section className="container my-4 about-section">
          <div className="row align-items-center">
            <div className="col-md-4 position-relative">
              <div className="text-box-right">
                <h2>Classic Yoga Fusion</h2>
                <p>
                  Immerse yourself in the timeless essence of yoga, ranging from
                  the rhythmic flow of Vinyasa to the serene calm of Yin and the
                  foundational practices of Hatha. A harmonious blend for all
                  seeking a traditional yet diverse yoga experience. Immerse
                  yourself in the timeless essence of yoga, ranging from the
                  rhythmic flow of Vinyasa to the serene calm of Yin and the
                  foundational practices of Hatha. A harmonious blend for all
                  seeking a traditional yet diverse yoga experience.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src="../img/sound-healing.png"
                className="img-fluid rounded"
                alt="Yoga Image"
              />
            </div>
          </div>
        </section>
        <section className="container my-4 about-section">
          <div className="row align-items-center">
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <img
                src="../img/nutrition.jpg"
                className="img-fluid rounded"
                alt="Yoga Image"
              />
            </div>
            <div className="col-md-4 position-relative">
              <div className="text-box">
                <h2>Classic Yoga Fusion</h2>
                <p>
                  Immerse yourself in the timeless essence of yoga, ranging from
                  the rhythmic flow of Vinyasa to the serene calm of Yin and the
                  foundational practices of Hatha. A harmonious blend for all
                  seeking a traditional yet diverse yoga experience. Immerse
                  yourself in the timeless essence of yoga, ranging from the
                  rhythmic flow of Vinyasa to the serene calm of Yin and the
                  foundational practices of Hatha. A harmonious blend for all
                  seeking a traditional yet diverse yoga experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container my-4 about-section">
          <div className="row align-items-center">
            <div className="col-md-4 position-relative">
              <div className="text-box-right">
                <h2>Classic Yoga Fusion</h2>
                <p>
                  Immerse yourself in the timeless essence of yoga, ranging from
                  the rhythmic flow of Vinyasa to the serene calm of Yin and the
                  foundational practices of Hatha. A harmonious blend for all
                  seeking a traditional yet diverse yoga experience. Immerse
                  yourself in the timeless essence of yoga, ranging from the
                  rhythmic flow of Vinyasa to the serene calm of Yin and the
                  foundational practices of Hatha. A harmonious blend for all
                  seeking a traditional yet diverse yoga experience.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src="../img/sound-healing.png"
                className="img-fluid rounded"
                alt="Yoga Image"
              />
            </div>
          </div>
        </section>
    </>
  );
}
