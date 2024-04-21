import data from "../../data/index.json";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function MyPortfolio() {
  const navigate = useNavigate();

  const navigateToCourse = (path) => {
    navigate("/courses/" + path);
  };
  return (
    <>
      <ScrollToTop />
      <section className="portfolio--section" id="MyPortfolio">
        <div className="portfolio--container-box">
          <div className="portfolio--container">
            <h1 className="section--heading">Courses</h1>
          </div>
        </div>
        <div className="portfolio--section--container">
          {data?.courses?.map((item, index) => (
            <div key={index} className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
              </div>
              <div className="portfolio--section--card--content">
                <div className="portfolio--section--heading">
                  <h3 className="portfolio--section--title">{item.title}</h3>
                  {/* <p className="text-md">{item.description}</p> */}
                </div>
                <button
                  onClick={() => navigateToCourse(item.path)}
                  className="portfolio--section--button"
                >
                  Details
                </button>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
