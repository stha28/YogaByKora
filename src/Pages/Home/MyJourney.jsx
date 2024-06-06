import { Carousel } from "antd";
import data from "../../data/index.json";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import ScrollToTop from "./ScrollToTop";
import ScrollableImage from "../ScrollableImage";

const contentStyle = {
  height: "300px", // Set the desired height for the carousel
  overflow: "hidden", // Ensure no overflow issues
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#364d79",
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover", // Ensure the image covers the entire area
};
export default function MyJourney() {
  const leftCarousel = [
    {
      url: "../img/bali1.jpg",
    },
    {
      url: "../img/bali3.jpg",
    },
    {
      url: "../img/bali2.jpg",
    },
  ];

  const Rishikesh = [
    {
      url: "./img/ri1.jpg",
    },
    {
      url: "./img/rishikesh2.jpg",
    },
    {
      url: "./img/ri2.jpg",
    },
  ];

  const vipasana = [
    {
      url: "./img/vipasana1.jpg",
    },
    {
      url: "./img/vipasana3.jpg",
    },
    {
      url: "./img/vipasana2.jpg",
    },
  ];

  const varanasi = [
    {
      url: "./img/varanasi2.jpg",
    },
    {
      url: "./img/varanasi1.jpg",
    },
    {
      url: "./img/varanasi3.jpg",
    },
  ];

  const vr = [
    {
      url: "./img/vr1.jpg",
    },
    {
      url: "./img/vr2.jpg",
    },
    {
      url: "./img/vr3.jpg",
    },
    {
      url: "./img/vr4.jpg",
    },
    {
      url: "./img/vr5.jpg",
    },
    {
      url: "./img/vr6.jpg",
    },
    {
      url: "./img/vr7.jpg",
    },
    {
      url: "./img/vr8.jpg",
    },
  ];

  const nepal = [
    {
      url: "./img/npp1.jpg",
    },
    {
      url: "./img/npp2.jpg",
    },
    {
      url: "./img/npp3.jpg",
    },
  ];
  return (
    <>
      <ScrollToTop />
      <HeroSection page="journey" classname="journey" title="My Journey" />

      <section id="AboutMe" className="container my-4 about-section">
        <h1 className="text-center">
          My path to healing and inner happiness through yoga: From Indonesia to
          India, from India to Nepal
        </h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-12 content-box">
            <div className="p-2"></div>
            <p>
              One morning, I listened to my intuition and felt the call to
              Indonesia, to go to Bali. In reality, I'm at the bottom of the
              hole, the hole of suffering. I still can't get out of this hole. I
              pretend not to see it, I fall into it, sometimes I come out of it,
              but I still go back into it far too often. Yet sometimes I see it,
              and I often fall in out of habit, even with my eyes open. My eyes
              are open because I've been working on this suffering for many
              years now. But the suffering is deep, it's not my fault, the road
              is long. That's surely why the right moment had arrived. To face
              my inner self head-on. To face this suffering with open eyes. The
              truth of suffering, declared Buddha, must be explored to its
              conclusion.So it was with open eyes that I set off for the first
              time to the other side of the world, to Indonesia, for a spiritual
              retreat. Having been initiated into the philosophy of yoga for
              years, the island of the gods is calling me.I want to go on a
              spiritual retreat in Bali. And why not learn more about yoga. So I
              decided to kill two birds with one stone and enrolled in a school
              in BALI for 1 month, where I did my 200H YTT. I'm immersed in
              Balinese culture, I'm living a most magical experience. Bali
              touches my heart. I come away from this experience enriched,
              nourished and changed. In Bali, I practice regularly in renowned
              studios, enriching my physical practice on a daily basis.I train
              and learn with teachers from all over the world. Down there, I
              find a great community of yogis.The energy is powerful.I find it
              very hard to leave this island, my first refuge. Above all, it's a
              profound personal experience that I've just had, and the pride of
              having obtained my 200H yoga teacher's diploma at the same time. I
              spent several months in Bali, immersing myself in Hinduism and
              Balinese culture, and then left for Thailand, where I learned
              about Buddhism and Thai culture.
            </p>
            <ScrollableImage images={leftCarousel} />
            <p>
              It was an intense first experience. I returned to France. I teach.
              I discover the joy of teaching, of sharing knowledge. I know what
              I want to share. But I feel I need to learn more from myself. I'm
              at the beginning of my path. I can feel it. This time I walk
              around the hole. I observe it. It's my responsibility. But to
              observe it is still to see it.Beyond not wanting to go in, I don't
              want to go near it. The revelation. I have to go back. I have to
              dig . I must experiment. I crave nourishment. I remember Buddha's
              words. I must continue to explore, my traumas, my anxieties, my
              fears to their end.
            </p>
            <div className="courses--quote">
              <p>
                Guided by Mahatma Gandhi's wise words, I learn as if I were to
                live forever.
              </p>
            </div>
            <p>
              I'm back in Bali, where I'm spending 2 months. This time in depth.
              I experience yoga in all its branches. These 8 branches. I deepen
              my personal practice, my profound knowledge of myself. I put
              PRANAYAMA and breathwork into practice, and feel the benefits in
              terms of stress and emotional management. Then I go to India for
              the first time. I intensify my personal physical practice by
              learning Ashtanga yoga with qualified teachers. Afterwards, I
              spent a month in a school where I took a further 300H of yoga
              teacher training. This time, I was introduced to various
              meditation practices. It was the first time I'd ever been in this
              field, and it was the beginning of a profound metamorphosis.
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
          <h1 className="text-center">Rishikesh</h1>
          <div className="row align-items-center">
            <div className="col-12 col-md-12 content-box">
              <div className="p-2"></div>
              <p>
                It's in Rishikesh, India, that I digest for the first time in an
                ashram located at the foot of the famous secret waterfall.A
                quiet, restful place.I meet Swami Shashwat Ji.I started
                meditating with this Guru, 2 hours of silent meditation from 4pm
                to 6pm every day.At first, I wasn't regular, but then I became
                disciplined and went every day for a month.I find my place. I
                can feel the power of the meditation. Swami Shashwat Ji lends me
                his book on self-realization, Living in Mindfulness.I feel lucky
                to have the only French version in my hands.I'm learning a
                lot.I'm fascinated by his enlightenment.I understand
                mindfulness.But I need to learn a real technique, I need to go
                deep into self-realization.
              </p>
              <ScrollableImage images={Rishikesh} />
              <hr />
              <h1 className="text-center">Vipassana</h1>
              <p>
                Direction Nepal.I decide to continue my journey of
                self-exploration.I spend 10 days in Silence at the Dhamma
                Shringa center in Kathmandu, one of the most famous Vipassana
                centers.Vipassana means seeing things as they really are, based
                on observation.It's one of India's oldest meditation techniques.
                Here, I'm deepening my meditation practice taught by Goenka. I'm
                having the most enriching experience of my life. Vipassana is
                clearly changing my life. 10 days of silence, 10 hours of
                meditation a day, no distractions.Silence became my refuge
              </p>
              <ScrollableImage images={vipasana} />
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
        <h1 className="text-center">Varanasi</h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-12 content-box">
            <div className="p-2"></div>
            <p>
              One of my biggest fears, death. This time, I'm ready to face it.
              I'm back in India and after a long train journey from Delhi I find
              my refuge in Varanasi. The center of the Indian world, where
              people want to live and die.I see faith in a way I'd never seen it
              before. Spirituality screams.India and devotion are one, here all
              emotions are intense.I'm where I'm supposed to be, when I'm
              supposed to be there.Here, death and life live side by side.I'm
              approaching death in a different way. Here, I continue my healing
              and learn other meditation techniques.
            </p>
            <ScrollableImage images={varanasi} />
            <p>
              I'm learning KRYA YOGA with the Lahiri Mahashay family. Kriya Yoga
              is a technique based on concentration and energy. Shibendu Lahiri,
              great-grandson of Lahiri Mahasahya, father of Kriya Yoga. he
              shares the original teaching technique of Kriya Yoga with all
              those who sincerely wish to learn it. The secret and sacred
              techniques of Kriya Yoga are passed down unchanged from father to
              son in the dynastic lineage. I spend 5 days in this ashram, in the
              heart of Varanasi. Grateful, once again, I am nourished from
              within.
            </p>
            <hr />
            <h1 className="text-center">Nepal</h1>
            <p>
              My healing through the vibratory power of SOUND. Having touched on
              various meditation methods, this time I found another healing
              power in the vibratory power of SOUND. Sound is a powerful force
              that affects mind, body and soul. On my first trips to India, I
              discovered the Kirtans, the music and the songs. I found in them a
              therapeutic power. Then, on a second trip to Nepal, I plunged
              deeper into this experience of sound healing thanks to the Tibetan
              bowls. This time I digested in a mountain village at the foot of
              the Annapurnas for a 5-day introduction to sound healing bowls.
            </p>
            <ScrollableImage images={nepal} />
            <p>
              I rejuvenate in nature with the Tibetan bowls. There, I learn in
              the most traditional way how to use these precious bowls and
              understand their effectiveness. I spend 5 days on this farm,
              living with this family in the most authentic way. It gave me an
              instant calm that took meditation to another level. Nepal was one
              of the most powerful and transformative experiences of my life. I
              felt the culmination of what I had come to explore. Sometimes
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
            <hr />
            <h1 className="text-center">TODAY: here and now</h1>
            <div className="row mt-2">
              <div className="col-md-6 mt-3">
                <p>
                  As you can imagine, travel is part of my life, and when I talk
                  about yoga, I often mean a journey towards oneself. I've been
                  on this journey for several years now, and I'm on it every
                  day. As you can see, yoga isn't just a physical practice, it's
                  much more than that. It's a philosophy of life, a way of
                  living. Yoga has literally changed my life and continues to do
                  it every day. It makes me free from my fears, my blockages and
                  my suffering. It's the way of life I've chosen, the one that
                  nourishes me, my balance, my refuge. Determined to share the
                  transformative benefits of yoga with the world, I teach online
                  and around the world. I teach traditional Hatha Yoga, which is
                  my foundation, my first refuge.{" "}
                </p>
                <p>
                  {" "}
                  Meditation and pranayamas accompany all my classes, as do my
                  precious Tibetan bowls. In reality, I have no particular style
                  of yoga. I follow my daily flow, but above all the flow of my
                  students. It's a moment between you and me, one-to-one or in a
                  group, souls on a different path but who, once on the mat, are
                  looking for the same thing: to get closer to the inner reality
                  of their existence. My aim is for everyone to find their own
                  path to inner peace through the various courses and practices
                  on offer. It's thanks to my personal experience, my spiritual
                  journey, my journey towards being, and my theoretical
                  training, that I'm able to pass on my knowledge. Isn't it
                  wonderful to be able to help? And if being helped makes you
                  want to help in turn, wouldn't that be magical too? Why keep
                  something positive within us to pass on? Yoga is a way of
                  life. Yoga is a journey towards self-realization, yoga is a
                  transmission. Teaching yoga in a theoretical way, but passing
                  it on in a spiritual way. Since life is constantly changing, I
                  don't know where I'll be tomorrow, but today I'm here and now.
                </p>
                <p>I look forward to practising together.</p>
                <p>With Love, Kora</p>
              </div>
              <div className="col-md-6 mt-3">
                <img
                  src="../img/about-me.png"
                  className="img-fluid rounded"
                  alt="Yoga Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row p-5"></div>
      </section>
      <Footer />
    </>
  );
}
