import { CSSTransition } from "react-transition-group";
import HeroSection from "./HeroSection";
import { Carousel } from "antd";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { useEffect, useState } from "react";

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

export default function Retreat() {
  const retreat = [
    {
      url: "../img/retreat/re1.jpg",
    },
    {
      url: "../img/retreat/re2.jpg",
    },
    {
      url: "../img/retreat/re3.jpg",
    },
    {
      url: "../img/retreat/re4.jpg",
    },
    {
      url: "../img/retreat/re5.jpg",
    },
    {
      url: "../img/retreat/re6.jpg",
    },
    {
      url: "../img/retreat/re7.jpg",
    },
    {
      url: "../img/retreat/re8.jpg",
    },
  ];

  const leftCarousel = [
    {
      url: "../img/retreat/left-carousel/re1.jpeg",
    },
    {
      url: "../img/retreat/left-carousel/re2.jpg",
    },
    {
      url: "../img/retreat/left-carousel/re3.jpeg",
    },
    {
      url: "../img/retreat/left-carousel/re4.jpg",
    },
    {
      url: "../img/retreat/left-carousel/re5.jpg",
    },
    {
      url: "../img/retreat/left-carousel/re6.jpg",
    },
  ];

  const rightCarousel = [
    {
      url: "../img/retreat/right-carousel/re1.jpeg",
    },
    {
      url: "../img/retreat/right-carousel/re2.jpeg",
    },
    {
      url: "../img/retreat/right-carousel/re3.jpeg",
    },
    {
      url: "../img/retreat/right-carousel/re4.jpeg",
    },
    {
      url: "../img/retreat/right-carousel/re5.jpeg",
    },
    {
      url: "../img/retreat/right-carousel/re6.jpeg",
    },
  ];

  const [leftImages, setLeftImages] = useState([]);
  const [rightImages, setRightImages] = useState([]);

  useEffect(() => {
    setLeftImages(leftCarousel);
    setRightImages(rightCarousel);
  }, []);

  return (
    <>
      <ScrollToTop />
      <HeroSection page="retreat" classname="retreat" title="Yoga & Retreat" />
      <section id="AboutMe" className="container my-4 about-section">
        <h1 className="text-center">INDIA RETREAT: RISHIKESH</h1>
        <p className="text-center mb-5">
          Yoga retreat in one of the holiest cities on the banks of the Ganges,
          at the foot of the Himalayas.{" "}
        </p>
        <div className="row align-items-center">
          <div className="col-12 col-md-12 content-box">
            <p>
              The retreat will take place in Rishikesh, the yoga capital and one
              of the holiest cities on the banks of the Ganges, at the foot of
              the Himalayas in India.
            </p>
            <p>
              Nestled at the foot of the Himalayas, Rishikesh is the place to go
              for rejuvenation of mind, body and soul. Known as the yoga capital
              of the world, it is a spiritual center brimming with ashrams and
              renowned yoga gurus. With the sacred Ganges flowing through the
              heart of this Uttarakhand city, Rishikesh is a popular place of
              pilgrimage for Hindus and is dotted with numerous temples.
            </p>
            <p>A fusion of spirituality, adventure, culture and nature :</p>
            <p>
              {" "}
              This yoga retreat is for you if you want to practice yoga and
              meditation daily, experience the beauty of Rishikesh and immerse
              yourself into the yogic lifestyle and India local culture.
            </p>

            <p className="mb-5">
              {" "}
              On this yoga retreat, you will get a chance to:
              <ul>
                <li className="p-2">
                  Practice yoga, including breathing techniques (pranayama), on
                  a daily basis. Beginners will get the chance to get a taste of
                  yoga and build a good foundation for their yogic journey. More
                  experienced yogis will deepen their practice and gain further
                  inspiration for their ongoing yoga journey.
                </li>
                <li className="p-2">
                  Practice meditation, guided meditation with guru, experience
                  sound bowl healing session, immerse yoursel in the kirtan.
                </li>
                <li className="p-2">
                  Taste organic healthy foods and india specialties.
                </li>
                <li className="p-2">
                  Wake up to stunning sunrise views on the foot of himalayan.
                </li>
                <li className="p-2">
                  Discover the beauty of India culture and immerse yourself with
                  Rishikesh community.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row p-5"></div>
      </section>
      <div class="wave-container-retreat">
        <svg
          class="wave-retreat"
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
        <div className="container mt-2">
          <div className="row">
            {retreat.map((item, index) => (
              <div className="col-md-3">
                <div
                  key={index}
                  className="card text-white my-5"
                  style={{
                    background: "#a9b9be",
                    borderRadius: "91px 0 91px 0",
                    borderColor: "#a9b9be",
                  }}
                >
                  <img
                    src={item.url}
                    className="card-img"
                    alt="Yoga Pose"
                    style={{
                      background: "#a9b9be",
                      borderRadius: "91px 0 91px 0",
                      borderColor: "#a9b9be",
                      height: "200px", // Adjust the height as needed
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="wave-container-portfolio">
        <svg
          className="wave-portfolio"
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
        <h1 className="text-center">The Program</h1>
        <div className="row align-items-center">
          <div className="content-box mt-5">
            <b className="mb-5">
              <u>Program :</u>
            </b>
            <p className="mt-2">
              - Arrival on the afternoon of October 6, 2024
            </p>

            <p>
              - Installation and dinner with opening ceremony on the rooftop
            </p>

            <p>- Departure on October 13 after brunch</p>

            <b className="mb-5">
              <u>Typical Day :</u>
            </b>
            <p className="mt-2">
              - 7am - 8am meditation - pranayama (on the hotel rooftop or on the
              banks of the Ganges)
            </p>

            <p>
              - 8h – 9h Hatha yoga: opening of the body and dynamic practice (on
              the hotel rooftop or on the banks of the Ganges)
            </p>

            <p>- 9 am: Breakfast on the hotel rooftop</p>
            <p>- 10am : free time</p>
            <p>- 1pm - 4pm: lunch + Suggested tours/excursions </p>
            <p>
              - 5 - 6 pm: Asana, gentle practice at the hotel or excursions for
              Aarti at 6pm{" "}
            </p>
            <p>- 7pm: dinner at the hotel restaurant </p>
            <p>
              - 8 p.m.: meditation, satsang, yoga philosophy, kirtan or rest
            </p>

            <b className="mb-5">
              <u>Activities and excursions :</u>
            </b>
            <p className="mt-2">
              - Sunrise and meditation at Kunjapuri Temple, followed by brunch
              at the famous café in Rishikesh
            </p>

            <p>
              - Aarti at Ram Jula and Haridwar two famous places to immerse
              yourself in the Aarti Ritual
            </p>

            <p>- 2 outdoor dinners with views of the Ganges.</p>
            <p>
              - Attendance at Rishikesh's most famous Kirtan and participation
              in the famous Rishikesh events at this time.
            </p>
            <p>
              - Silence Meditation in an ashram situated of the Secret Waterfall
              with famous Guru.
            </p>
            <p>- Full body Massage 1 hour</p>
            <p>And lots of surprises... </p>
          </div>
        </div>
        <div className="row p-5"></div>
      </section>
      <div class="wave-container-retreat1">
        <svg
          class="wave-retreat1"
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
      <div
        className="my-4"
        style={{ background: "#a9b9be", marginTop: "34px" }}
      >
        <div className="container mt-2">
          <div className="row" style={{ marginTop: "39px" }}>
            <div className="col-md-4">
              <Carousel autoplay>
                {leftImages.map((item, index) => (
                  <div key={index}>
                    <h3 style={contentStyle}>
                      <img src={item.url} loading="lazy" style={imgStyle} />
                    </h3>
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="col-md-4">
              <h1 className="text-center">RETREAT LOCATION </h1>
              <p>
                We'll be staying at IX HOSTEL in Tapovan in single or shared
                rooms. Food will be entirely vegetarian and organic, prepared by
                our local chef. Meals will be served on the hotel rooftop with a
                360° view of RISHIKESH. In October, the weather is very sunny
                and the temperature is perfect. Rishikesh is the perfect city to
                indulge in a moment of self-connection, and we are committed to
                transmitting its energy to you in the most authentic way
              </p>
            </div>
            <div className="col-md-4">
              <Carousel autoplay>
                {rightImages.map((item, index) => (
                  <div key={index}>
                    <h3 style={contentStyle}>
                      <img src={item.url} loading="lazy" style={imgStyle} />
                    </h3>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="row p-5"></div>
        </div>
      </div>
      <div class="wave-container-retreat2">
        <svg
          class="wave-retreat2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 310"
        >
          <path
            fill="#f1ebeb"
            fill-opacity="1"
            d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,176C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <section id="AboutMe" className="container my-4 about-section">
        <h1 className="text-center">Pricing and Inclusions</h1>
        <div className="row align-items-center">
          <div className="content-box mt-5">
            <b className="mb-5">
              <u>Pricing for 7 days/ 6 nights :</u>
            </b>
            <p className="mt-2">- Private room: 1,300 euros per person.</p>

            <p>- Shared room for two: 1100 euros per person.</p>

            <b className="mb-5">
              <u>Included :</u>
            </b>
            <p className="mt-2">- all retreat programs and activities</p>

            <p>- accomodation in private room or shared room for two persons</p>

            <p>- all meals (breakfast, lunch, dinner, tea, snacks)</p>
            <p>- all meals (breakfast, lunch, dinner, tea, snacks)</p>
            <p>
              <b>Note:</b> Yoga mats will be provided.
            </p>

            <b className="mb-5">
              <u>Not included:</u>
            </b>
            <p className="mt-2">
              - airfare: take a round-trip flight to New Delhi airport
            </p>

            <p>
              - Aarti at Ram Jula and Haridwar two famous places to immerse
              yourself in the Aarti Ritual.
            </p>

            <p>- Personal purchases</p>
          </div>
        </div>
        <hr />
        <h1 className="text-center">Terms and conditions</h1>
        <div className="row align-items-center">
          <div className="content-box mt-5">
            <b className="mb-5">
              <u>Registration:</u>
            </b>
            <p className="mt-2">- by e-mail : yogabykora@gmail.com.</p>

            <p>- by whatsapp :</p>

            <p>- by instagram : yogabykora</p>

            <p>
              50% of the total is required to reserve. Full payment is due
              before the start of the retreat. If cancellation is made less than
              90 days in advance, the deposit is non-refundable.
            </p>
          </div>
        </div>
        <div className="row p-5"></div>
      </section>
      <Footer />
    </>
  );
}
