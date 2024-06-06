import { useNavigate } from "react-router-dom";
import ScrollToTop from "./Home/ScrollToTop";
import Footer from "./Home/Footer";
import HeroSection from "./Home/HeroSection";

export default function CourseYoga() {
  return (
    <>
      <ScrollToTop />
      <HeroSection page="yoga" classname="yoga" title="Hatha Yoga" />
      <section id="AboutMe" className="container my-4 about-section">
        <h1 className="text-center"></h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-12 content-box mb-3">
            <p className="p-2">
              There are different types of yoga, the main and ancestral ones
              being Bhakti Yoga (the yoga of devotion) Karma Yoga (the yoga of
              action) and Raja yoga (royal Yoga).
            </p>

            <div className="row">
              <div className="col-md-6">
                <p>
                  <ul>
                    <li>Bhakti Yoga uses chanting, prayer and rituals</li>
                    <li>Karma yoga uses selfless action</li>
                    <li>
                      Hatha Yoga uses postures and techniques of purification
                      and breathing to access this mental peace which is the
                      true Holy Grail of all paths of Yoga, Raja Yoga
                    </li>
                    <li>
                      Raja yoga is then defined in 8 stages of evolution (the 8
                      libs of yoga) developed by Patanjali, a great philosopher
                      of the beginning of our era, this includes, among other
                      things, the Hatha Yoga that we practice.
                    </li>
                  </ul>
                </p>
                <p>
                  <b>These eight steps are broken down as follows</b>
                </p>
                <p>
                  <ul>
                    <li>
                      Yama or rules of conduct (non-violence, being in the
                      truth, not stealing, control of the senses, not
                      compromising)
                    </li>
                    <li>
                      Niyama or life disciplines (cleanliness, attitude of
                      acceptance, asceticism, self-study, devotion)
                    </li>
                    <li>Asanas (physical postures of the body)</li>
                    <li>Pranayama (breath discipline)</li>
                    <li>Pratyahara (disconnection of sense organs)</li>
                    <li>Dhyana (meditative state)</li>
                    <li>Samadhi (state of stability)</li>
                  </ul>
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src="../img/coyoga.jpg"
                  alt="About Me"
                  width="60%"
                  height={400}
                  className=" rounded"
                />
              </div>
            </div>
            <div className="courses--quote">
              <p>
                “Achieving this perfection in Raja Yoga without Hatha is
                impossible, just as achieving it in Hatha without Raja Yoga.
                Therefore, both must be practiced continuously until successful
                completion."
              </p>
            </div>
            <hr />
            <h1 className="text-center">What you must remember</h1>
            <p>
              Hatha Yoga focuses on the physiological part of the being. A
              multitude of postures are practiced with the aim of harmonizing
              body and mind.
            </p>
            <p>
              It is an energetic yoga. Hatha Yoga calls upon many energetic
              notions: the breaths of vital energy through the practice of
              Pranayamas, the differences in bodily envelopes (koshas), the
              channels where energy flows (the nadis, the chakras).
            </p>
            <p>
              Hatha is made up of two words: HA which means Sun and THA which
              means Moon. We must see in these terms, the opposites, but also
              the complementarity represented by the symbolism of the sun and
              the moon just like Yin and Yang in the Chinese Tao. Yoga from the
              Sanskrit term “YUJ” means union.
            </p>
            <p>
              Hatha Yoga then seeks to harmonize, through physical exercises,
              the two opposing but complementary energies for the purposes of
              stability of the mind.
            </p>
            <hr />
            <h1 className="text-center">The ancestor of postural yoga</h1>
            <p>
              Hatha Yoga, thus defined, is a tremendously powerful practice, but
              what’s more, it is the ancestor of all postural yogas. Indeed, all
              styles of yoga that use postures, breathing and meditation are
              Hatha Yoga.
            </p>
            <p>
              Vinyasa Yoga, Ashtanga Yoga, but also Yin or Restorative Yoga, in
              the classic sense of the term, are nothing other than Hatha Yoga.
            </p>
            <p>
              Hatha Yoga is the most ancestral and complete practice, ranging
              from postural practice to breath control, from self-observation to
              relaxation.
            </p>
            <p>
              A Hatha Yoga class lasts from 1 hour to 1 hour 30 minutes
              including: asanas (postures linking body and breathing), pranayama
              (breath control), pratyahara (withdrawal of the senses achieved
              through deep relaxation) and dharana (concentration). Classes can
              be more or less gentle or invigorating and are open to everyone,
              beginners or advanced.
            </p>
            <p>
              Yoga is not just practiced on the mat, it is a way of life. The
              practice of YAMA and NIYAMA are rules of life and disciplines of
              life towards others and oneself which are not only practiced on
              the mat.
            </p>
            <p>
              You will have understood, Yoga is a complete holistic discipline
              and each experience will enrich your understanding of Yoga. It is
              an individual journey towards a stable, solid, spiritual and
              authentic practice.
            </p>
            <p>Practice and the rest will come.</p>
          </div>
        </div>
        <div className="row p-5"></div>
      </section>
      <Footer></Footer>
    </>
  );
}
