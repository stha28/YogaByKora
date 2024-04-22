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
    if (item.id == 7) {
      return (
        <div className="my--journey--content--with--photos">
          <div className="my--journey--photos">
            {item.src.map((src) => (
              <img src={src} alt="" />
            ))}
          </div>
          <div className="my--journey--info--vipasana">
            <p>{item.story}</p>
          </div>
        </div>
      );
    }
    if (item.id == 6) {
      return (
        <div>
          <div className="my--journey--content">
            <p>{item.story}</p>
          </div>
          <div className="my--journey--photos">
            {item.src.map((src) => (
              <img src={src} alt="" />
            ))}
          </div>
        </div>
      );
    }
    if (item.id == 9) {
      return (
        <div className="my--journey--content--with--photos">
          <div className="my--journey--info">
            <p>{item.story}</p>
            <p>
              I rejuvenate in nature with the Tibetan bowls. There, I learn in
              the most traditional way how to use these precious bowls and
              understand their effectiveness. I spend 5 days on this farm,
              living with this family in the most authentic way. It gave me an
              instant calm that took meditation to another level. Nepal was one
              of the most powerful and transformative experiences of my life. I
              felt the culmination of what I had come to explore. Sometimes
              something magical happens when you travel: you remember exactly
              why you're doing it, and you're so happy and present in that
              moment. Sometimes it's the people you meet, sometimes it's the
              places you find yourself. Sometimes it's both. My suffering led me
              to Indonesia, so in the end it's thanks to my suffering that I've
              come this far. Today, having learned observation and compassion, I
              thank my suffering, i want to thank myself. Learning to embrace
              discomfort. Transition is uncomfortable and scary, but it leads
              you to fulfillment.
            </p>
          </div>
          <div className="my--journey--photos">
            {item.src.map((src) => (
              <img src={src} alt="" />
            ))}
          </div>
        </div>
      );
    }
    if (item.src.length > 0) {
      return (
        <div className="my--journey--content--with--photos">
          <div className="my--journey--info">
            <p>{item.story}</p>
          </div>
          <div className="my--journey--photos">
            {item.src.map((src) => (
              <img src={src} alt="" />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="my--journey--content">
          <p>{item.story}</p>
        </div>
      );
    }
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
            {/* {renderImages(item)} */}
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
