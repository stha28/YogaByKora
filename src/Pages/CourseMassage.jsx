import ScrollToTop from "./Home/ScrollToTop";

export default function CourseMassage() {
  return (
    <>
      <ScrollToTop />
      <section id="CourseMassage" className="courses--section">
        <div className="courses--content">
          <div className="courses--heading">
            <h1>Massage</h1>
          </div>
          <div className="courses--content--holder">
            <div className="courses--content--box">
              <div className="courses--content--child">
                <div className="course--section--title">
                  <h3>LYMPHATIC DRAINAGE</h3>
                </div>
                <div className="courses--details">
                  <p>
                    I am a graduate of the Renata Franca method, trained by
                    Nathalie Duarte, in Marseille, in France since 2020. I offer
                    home lymphatic drainage and miracle face treatments. Renata
                    Franca lymphatic drainage is an innovative and radical
                    technique that delivers excellent results from the very
                    first session.
                  </p>
                </div>
              </div>
              <div className="courses--content--child">
                <div className="course--section--title">
                  <h3>What is the Lymphatic drainage massage?</h3>
                </div>
                <div className="courses--details">
                  <p>
                    The Renata Franca method of lymphatic drainage is a manual
                    massage technique performed over the entire body, using
                    precise toning movements on the circulatory path of the
                    lymphatic system. We use firm &quot;pumping&quot; pressure
                    on the lymph glands. Thanks to this unique protocol, we
                    achieve incredible results, both physically and internally,
                    with a sensation of lightness in the moment. Lymphatic
                    drainage is recommended for pregnant women (of course, we
                    don&#39;t drain the stomach).
                  </p>
                </div>
              </div>
              <div className="courses--content--child">
                <div className="course--section--title">
                  <h3>Benefits of Lymphatic drainage massage?</h3>
                </div>
                <div className="courses--details">
                  <ul>
                    <li>Promotes weight loss by reducing fluid accumulation</li>
                    <li>Optimizes lymph circulation and venous return</li>
                    <li>Boosts metabolism by reducing toxins</li>
                    <li>Helps relieve heavy legs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
