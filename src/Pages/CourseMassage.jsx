import ScrollToTop from "./Home/ScrollToTop";
import Footer from "./Home/Footer";
import HeroSection from "./Home/HeroSection";

export default function CourseMassage() {
  return (
    <>
      <ScrollToTop />
      <HeroSection page="yoga" classname="massage" title="Massage" />
      <section id="AboutMe" className="container my-4 about-section">
        <h1 className="text-center">Massage</h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-12 content-box mb-3">
            <p className="p-3">
              I am a graduate of the Renata Franca method, trained by Nathalie
              Duarte, in Marseille, in France since 2020. I offer home lymphatic
              drainage and miracle face treatments. Renata Franca lymphatic
              drainage is an innovative and radical technique that delivers
              excellent results from the very first session.
            </p>
            <h1 className="text-center">
              What is the Lymphatic drainage massage?
            </h1>
            <p className="p-3">
              The Renata Franca method of lymphatic drainage is a manual massage
              technique performed over the entire body, using precise toning
              movements on the circulatory path of the lymphatic system. We use
              firm "pumping" pressure on the lymph glands. Thanks to this unique
              protocol, we achieve incredible results, both physically and
              internally, with a sensation of lightness in the moment. Lymphatic
              drainage is recommended for pregnant women (of course, we don't
              drain the stomach).
            </p>
            <h1 className="text-center">
              Benefits of Lymphatic drainage massage?
            </h1>
            <p className="p-3">
              <ul>
                <li>Promotes weight loss by reducing fluid accumulation</li>
                <li>Optimizes lymph circulation and venous return</li>
                <li>Boosts metabolism by reducing toxins</li>
                <li>Helps relieve heavy legs</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row p-5"></div>
      </section>
      <Footer></Footer>
    </>
  );
}
