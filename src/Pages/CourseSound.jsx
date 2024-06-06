import ScrollToTop from "./Home/ScrollToTop";
import data from "../data/index.json";
import Footer from "./Home/Footer";
import HeroSection from "./Home/HeroSection";

export default function CourseSound() {
  return (
    <>
      <ScrollToTop />
      <HeroSection page="yoga" classname="sound" title="Sound Healing" />
      <section id="AboutMe" className="container my-4 about-section">
        <h1 className="text-center"></h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-12 content-box mb-3">
            <p>
              First of all we need to understand that there are a million
              varieties of Singing Bowls out there. Only very few are suitable
              for sound healing. A traditional Singing Bowl is handmade from
              seven metals: lead, tin, iron, copper, zinc, silver and gold,
              matching to our seven energy centers (Chakras). Tibetan Singing
              Bowls have been used for centuries for healing and meditation
              purposes. They create a range of sounds to restore the normal
              vibratory frequencies of diseased and out-of-harmony parts of the
              body, mind and soul.
            </p>
            <h1 className="text-center">How does the Singing bowl work?</h1>
            <p>
              Singing Bowls work through sound and vibration. It's deep
              vibration stimulates the energy meridians, blood vessels, lymph
              and nerves on a cellular level. This helps to balance your energy
              channels (Nadis), your energy centers (Chakras) and to relax tense
              body parts. Kundalini energy which begins at the base of the spine
              is released, traveling upwards along the spine through the body.
              When this occurs you may experience twitching muscles or even some
              discomfort, if there are blockages along the Nadis. The vibrations
              of the Singing Bowl helps our body to heal and to re-tune into the
              divine frequencies every living being and the universe is made of.
            </p>
            {/* <div className="row p-2">
              <div className="col-md-4">
                <p>
                  <ul>
                    <li>Deep relaxation and release of tension</li>
                    <li>Improves sleep</li>
                    <li>Purifies and harmonizes our emotions and feelings</li>
                    <li>Stimulates and strengthens the immune system</li>
                  </ul>
                </p>
              </div>
              <div className="col-md-5">
                <p>
                  <ul>
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
                </p>
              </div>
            </div> */}
            <h1 className="text-center">How does sound heals us?</h1>
            <p>
              Singing Bowl Meditation and Sound healing is an ancient therapy
              which is used to realign our physical and emotional world. The
              sounds generated by Tibetan Singing Bowls are a type of energy
              medicine that promote healing from stress disorders, pain,
              depression, and most forms of dis-ease. Healing processes are
              initiated through entraining our brainwaves to synchronize with
              the perfect resonance of the bowls. Unique tones create the
              perfect state for deep meditation, creative thinking and intuitive
              messages. The pure sonic waves that ring from Tibetan Singing
              Bowls wake up our ability to hear with more than our ears. We feel
              the sound as much as we take it in with our ears.
            </p>
            <p>
              “If we accept that sound is vibration and we know that vibration
              touches every part of our physical being, then we understand that
              sound is heard not only through our ears but through every cell in
              our bodies. One reason sound heals on a physical level is because
              it so deeply touches and transforms us on the emotional and
              spiritual planes. Sound can redress imbalances on every level of
              physiologic functioning and can play a positive role in the
              treatment of virtually any medical disorder.”
            </p>
            <p>
              It can be said that illness is a manifestation of dis-harmony
              within the body - an imbalance in the cells or a given organ.
              Since all matter is energy vibrating at different rates, by
              altering the rate of vibration we can change the structure of
              matter. Sound from Tibetan Singing Bowls entrain the brain to move
              into the Theta brain wave frequencies that induce deep meditative
              and peaceful states, clarity of mind, and intuition. The sound
              vibrations impact our nervous system, engaging our relaxation
              reflex and inhibiting the stress or pain response.
            </p>
          </div>
        </div>
        <div className="row p-5"></div>
      </section>
      <div class="wave-container-journey">
        <svg
          class="wave-journey"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 310"
        >
          <path
            fill="#a9b9be"
            fill-opacity="1"
            d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,176C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="my-4" style={{ background: "#a9b9be" }}>
        <section id="AboutMe" className="container my-4 about-section">
          <h1 className="text-center">Sound Healing and Meditation</h1>
          <div className="row align-items-center">
            <div className="col-12 col-md-12 content-box">
              <p>
                Sound healing is a holistic practice that employs the vibrations
                and tones of singing bowls to restore balance and promote
                well-being. When the singing bowls are gently struck or played,
                they produce a rich, melodic sound that resonates with the body
                at a cellular level. This sound induces a sense of tranquility,
                reducing stress, anxiety, and promoting relaxation.
              </p>
              <p>
                Meditation, on the other hand, is a practice of focused
                attention and mindfulness, aimed at calming the mind and
                achieving a heightened state of awareness. Singing bowls, with
                their soothing tones, are an excellent complement to meditation.
                They help individuals enter a meditative state more easily and
                maintain it for a longer duration.
              </p>
            </div>
          </div>
          <h1 className="text-center">Benefits of Singing Bowl Meditation</h1>
          <div className="row align-items-center">
            <div className="col-12 col-md-12 content-box">
              <b> 1. Stress Reduction</b>
              <p>
                Singing bowl meditation aids in stress reduction. The resonating
                tones of the bowls have a calming effect, helping individuals
                let go of their worries and enter a state of relaxation.
              </p>
              <b>2. Enhanced Focus</b>
              <p>
                The gentle hum of singing bowls acts as a focal point during
                meditation, making it easier to concentrate and stay present in
                the moment.
              </p>
              <b>3. Emotional Healing</b>
              <p>
                Sound healing with singing bowls can help release emotional
                blockages and promote emotional healing, leading to a greater
                sense of well-being.
              </p>
              <b>4. Physical Benefits</b>
              <p>
                Some practitioners report physical benefits such as pain relief
                and improved sleep after incorporating singing bowl meditation
                into their routine.
              </p>
            </div>
          </div>
          <div className="row p-5"></div>
        </section>
      </div>
      <div className="wave-container-journey2">
        <svg
          className="wave-journey2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 310"
          style={{ background: "#a9b9be" }}
        >
          <path
            fill="#f1ebeb"
            fill-opacity="1"
            d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,176C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <section id="AboutMe" className="container my-4 about-section">
        <h1 className="text-center">Treatments</h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-12 content-box">
            <div className="container mt-2">
              <div className="row">
                <div className="col-md-5">
                  <img
                    src="../img/sound-healing.png"
                    className="card-img mb-2 rounded"
                    alt="Yoga Pose"
                    style={{ width: "100%", height: "339px", objectFit:'cover' }}
                  />
                </div>
                <div className="col-md-7">
                  <h1>Himalaya sound meditation</h1>
                  <p>
                    {" "}
                    Bath in the sounds and vibrations of Tibetan Singing Bowls
                    and enjoy a deep relaxing and meditative state of being.
                    Binaural Frequencies invite to wander between dimensions and
                    to explore your inner and outer world. A form of sound
                    meditation that is suitable for groups.
                  </p>
                  <a
                    className="btn-github-about mt-2"
                    href="https://www.instagram.com/yogabykora"
                    style={{ textDecoration: "none" }}
                  >
                    Book Now
                  </a>
                </div>
                {/* <div className="col-md-5">
                  <img
                    src="../img/sound-healing-middle.jpg"
                    className="card-img mb-2"
                    alt="Yoga Pose"
                  />
                  <h1>7 chakra and Nadi balancing</h1>
                  <p>
                    {" "}
                    Balancing the inner world through deep vibration, alignment
                    and cleansing of Nadis (energy channels) and Chakras (energy
                    centers).
                  </p>
                  <a
                    className="btn-github-about mt-2"
                    href="https://www.instagram.com/yogabykora"
                    style={{ textDecoration: "none" }}
                  >
                    Book Now
                  </a>
                </div> */}
                {/* <div className="col-md-6">
                  <div
                    className="card text-white my-5 "
                    style={{
                      background: "#a9b9be",
                      borderRadius: "91px 0 91px 0",
                      borderColor: "#a9b9be",
                    }}
                  >
                    <img
                      src="../img/sound-healing.png"
                      className="card-img"
                      alt="Yoga Pose"
                      style={{
                        borderRadius: "91px 0 91px 0",
                        borderColor: "#a9b9be",
                      }}
                    />
                    <div className="blog_posts_image_content">
                      <span className="badge badge-primary">
                        Himalaya sound meditation
                      </span>
                      <h5 class="card-title">
                        Bath in the sounds and vibrations of Tibetan Singing
                        Bowls and enjoy a deep relaxing and meditative state of
                        being. Binaural Frequencies invite to wander between
                        dimensions and to explore your inner and outer world. A
                        form of sound meditation that is suitable for groups.
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="card text-white my-5"
                    style={{
                      background: "#a9b9be",
                      borderRadius: "91px 0 91px 0",
                      borderColor: "#a9b9be",
                    }}
                  >
                    <img
                      src="../img/sound-healing-middle.jpg"
                      className="card-img"
                      alt="Yoga Pose"
                      style={{
                        background: "#a9b9be",
                        borderRadius: "91px 0 91px 0",
                        borderColor: "#a9b9be",
                      }}
                    />
                    <div className="blog_posts_image_content">
                      <span class="badge badge-primary">
                        7 chakra and Nadi balancing
                      </span>
                      <h5 class="card-title">
                        Balancing the inner world through deep vibration,
                        alignment and cleansing of Nadis (energy channels) and
                        Chakras (energy centers).
                      </h5>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-md-4">
                    <div
                      class="card text-white my-5 "
                      style={{
                        background: "#a9b9be",
                        borderRadius: "91px 0 91px 0",
                        borderColor: "#a9b9be",
                      }}
                    >
                      <img
                        src="../img/sound-healing.png"
                        class="card-img"
                        alt="Yoga Pose"
                        style={{
                          borderRadius: "91px 0 91px 0",
                          borderColor: "#a9b9be",
                        }}
                      />
                      <div class="blog_posts_image_content">
                        <span class="badge badge-primary">
                          WORK SHOP Sound healing Bowl
                        </span>
                        <h5 class="card-title">
                          1:30 hour <br />
                          GROUP
                        </h5>
                      </div>
                    </div>
                  </div> */}
              </div>
              <hr />
              <div className="row">
                <div className="col-md-5">
                  <img
                    src="../img/sound-healing-middle.jpg"
                    className="card-img mb-2 rounded"
                    alt="Yoga Pose"
                    style={{ width: "100%", height: "339px", objectFit:'cover', objectPosition: '61% 39%'}}
                  />
                </div>
                <div className="col-md-7">
                  <h1>7 chakra and Nadi balancing</h1>
                  <p>
                    {" "}
                    Balancing the inner world through deep vibration, alignment
                    and cleansing of Nadis (energy channels) and Chakras (energy
                    centers).
                  </p>
                  <a
                    className="btn-github-about mt-2"
                    href="https://www.instagram.com/yogabykora"
                    style={{ textDecoration: "none" }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-5"></div>
      </section>

      <Footer></Footer>
    </>
  );
}
