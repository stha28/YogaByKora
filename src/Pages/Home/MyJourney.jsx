import data from "../../data/index.json";
import ScrollToTop from "./ScrollToTop";

export default function MyJourney() {
    return (
      <><ScrollToTop />
      <section id="MyJourney" className="my--journey--section">
        {data?.journey?.map((item, index) => (
          <div className="my--journey--journey--content--box">
            <div className="my--journey--heading">
              <h3>{item.heading}</h3>
            </div>
            <div className="my--journey--content">
              <p>{item.story}</p>
            </div>
            <div className="my--journey--photos">
              {item.src.map(src => (
                <img src={src} alt="" />
              ))}
            </div>
          </div>

        ))}
      </section></>
    );
  }