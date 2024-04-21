import data from "../../data/index.json";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function MyJourney() {
  const renderImages = (item) => {
    if (item.src.length > 0) {
      return (
        <div className="my--journey--photos">
          {item.src.map((src) => (
            <img src={src} alt="" />
          ))}
        </div>
      );
    }
  };

  const renderContent = (item) => {
    if (item.id == 3) {
      return (
        <div className="my--journey--content--gandhi">
          <p>{item.story}</p>
        </div>
      );
    }
    return (
      <div className="my--journey--content">
        <p>{item.story}</p>
      </div>
    );
  };
  return (
    <>
      <ScrollToTop />
      <section id="MyJourney" className="my--journey--section">
        {data?.journey?.map((item, index) => (
          <div className="my--journey--content--box">
            <div className="my--journey--heading">
              <h3>{item.heading}</h3>
            </div>
            {/* <div className="my--journey--content">
              <p>{item.story}</p>
            </div> */}
            {renderContent(item)}
            {renderImages(item)}
          </div>
        ))}
        <div className="my--journey--content">
          <p>I look forward to practising together.</p>
        </div>
        <div className="my--journey--content">
          <p>With Love,</p>
        </div>
        <div className="my--journey--content">
          <p>Kora</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
