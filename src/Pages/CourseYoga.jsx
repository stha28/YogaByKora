import { useNavigate } from "react-router-dom";
import ScrollToTop from "./Home/ScrollToTop";

export default function CourseYoga() {
  return (
    <>
      <ScrollToTop />
      <section id="CourseYoga" className="courses--section">
        <div className="courses--content">
          <div className="courses--heading">
            <h1>Hatha Yoga</h1>
          </div>
          <div className="courses--content--box">
            <p className="courses--details--yoga-firstline">
              There are different types of yoga, the main and ancestral ones
              being Bhakti Yoga (the yoga of devotion) Karma Yoga (the yoga of
              action) and Raja yoga (royal Yoga).
            </p>
            <div className="courses--details">
              <ul>
                <li>Bhakti Yoga uses chanting, prayer and rituals</li>
                <li>Karma yoga uses selfless action</li>
                <li>
                  Hatha Yoga uses postures and techniques of purification and
                  breathing to access this mental peace which is the true Holy
                  Grail of all paths of Yoga, Raja Yoga
                </li>
                <li>
                  Raja yoga is then defined in 8 stages of evolution (the 8 libs
                  of yoga) developed by Patanjali, a great philosopher of the
                  beginning of our era, this includes, among other things, the
                  Hatha Yoga that we practice.
                </li>
              </ul>
            </div>
            <div className="course--section--title">
              <h3>These eight steps are broken down as follows</h3>
            </div>
            <div className="courses--details">
              <ul>
                <li>
                  Yama or rules of conduct (non-violence, being in the truth,
                  not stealing, control of the senses, not compromising)
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
            </div>
            <div className="courses--quote">
              <p>
                {" "}
                “Achieving this perfection in Raja Yoga without Hatha is
                impossible, just as achieving it in Hatha without Raja Yoga.
                Therefore, both must be practiced continuously until successful
                completion."
              </p>
            </div>
            <div className="course--section--title">
              <h3>What you must remember</h3>
            </div>
            <div className="courses--details">
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
                means Moon.
              </p>
              <p>
                We must see in these terms, the opposites, but also the
                complementarity represented by the symbolism of the sun and the
                moon just like Yin and Yang in the Chinese Tao. Yoga from the
                Sanskrit term “YUJ” means union.
              </p>
              <p>
                Hatha Yoga then seeks to harmonize, through physical exercises,
                the two opposing but complementary energies for the purposes of
                stability of the mind.
              </p>
            </div>
            <div className="course--section--title">
              <h3>The ancestor of postural yoga</h3>
            </div>
            <div className="courses--details">
              <p>
                Hatha Yoga, thus defined, is a tremendously powerful practice,
                but what’s more, it is the ancestor of all postural yogas.
                Indeed, all styles of yoga that use postures, breathing and
                meditation are Hatha Yoga.
              </p>
              <p>
                Vinyasa Yoga, Ashtanga Yoga, but also Yin or Restorative Yoga,
                in the classic sense of the term, are nothing other than Hatha
                Yoga.
              </p>
              <p>
                Hatha Yoga is the most ancestral and complete practice, ranging
                from postural practice to breath control, from self-observation
                to relaxation.
              </p>
              <p>
                A Hatha Yoga class lasts from 1 hour to 1 hour 30 minutes
                including: asanas (postures linking body and breathing),
                pranayama (breath control), pratyahara (withdrawal of the senses
                achieved through deep relaxation) and dharana (concentration).
                Classes can be more or less gentle or invigorating and are open
                to everyone, beginners or advanced.
              </p>
              <p>
                Yoga is not just practiced on the mat, it is a way of life. The
                practice of YAMA and NIYAMA are rules of life and disciplines of
                life towards others and oneself which are not only practiced on
                the mat.
              </p>
              <p>
                You will have understood, Yoga is a complete holistic discipline
                and each experience will enrich your understanding of Yoga. It
                is an individual journey towards a stable, solid, spiritual and
                authentic practice.
              </p>
              <p>Practice and the rest will come.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
