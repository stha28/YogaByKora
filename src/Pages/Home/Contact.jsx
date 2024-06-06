import React, { useContext, useEffect, useRef } from "react";

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add("visible");
          section.classList.remove("hidden");
        } else {
          section.classList.remove("visible");
          section.classList.add("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case the section is already in view

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickContact = () => {
    // Scroll to the contact section within the current page
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // If contact section not found on current page, redirect to contact page
      navigate("/contact");
    }
  };

  return (
    <>
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
      <section id="Contact" className="contact-section hidden" ref={sectionRef}>
        <div className="contact-section-heading">
          <h1>Practice with Kora</h1>
          <p>
            Discover what your body needs to thrive transform for the better.
          </p>
          {/* <div className="row align-items-center mt-4">
            <div className="col-md-8">
              <img
                src="../img/about-me.png"
                className="img-fluid rounded"
                alt="Yoga Image"
              />
            </div>
            <div className="col-md-4 position-relative">
              <div className="text-box" style={{ width: "245%" }}>
                <p>
                  My goal is to create a safe energy and welcoming classes that
                  would make yoga accessible to everyone regardless of
                  experience or ability.My Classes are intimate, comfortable and
                  fun! After seven years of personal practice, I learned the
                  physical benefits of yoga are tremendous but the true magic is
                  what it does for the soul! Yoga creates awareness of breath,
                  stress reduction, peace of mind and body acceptance. It
                  enables us to step outside of pure emotional responses,
                  unpleasant or inharmonious situations and respond with dignity
                  and grace. I love to share my love of yoga in an intimate
                  environment. Together, we observe the body, the mind and the
                  breath with compassion, thoughtfulness and above all, without
                  judgment.See you soon on the mat
                </p>
              </div>
            </div>
          </div> */}
          <div className="row align-items-center mt-4">
            <div className="col-md-3">
              <img
                src="../img/co1.jpg"
                className="img-fluid rounded"
                alt="Yoga Image"
              />
            </div>
            <div className="col-md-6">
              <p>
                My goal is to create a safe energy and welcoming classes that
                would make yoga accessible to everyone regardless of experience
                or ability.My Classes are intimate, comfortable and fun! After
                seven years of personal practice, I learned the physical
                benefits of yoga are tremendous but the true magic is what it
                does for the soul! Yoga creates awareness of breath, stress
                reduction, peace of mind and body acceptance. It enables us to
                step outside of pure emotional responses, unpleasant or
                inharmonious situations and respond with dignity and grace. I
                love to share my love of yoga in an intimate environment.
                Together, we observe the body, the mind and the breath with
                compassion, thoughtfulness and above all, without judgment.See
                you soon on the mat
              </p>
            </div>
            <div className="col-md-3">
              <img
                src="../img/co.jpg"
                className="img-fluid rounded"
                alt="Yoga Image"
              />
            </div>
          </div>
        </div>

        <div className="contact-section-lists">
          <div className="contact-section-item">
            <div className="contact-item-heading">ONLINE CLASSES</div>
            <div className="contact-item-info">
              {/* <p>
                Challenge your body and discover strength and agility in
                all-levels yoga classes.
              </p> */}
            </div>
          </div>
          <div className="contact-section-item">
            <div className="contact-item-heading">PRIVATE CLASSES</div>
            <div className="contact-item-info">
              {/* <p>
                Experience the power of meditation and pranayama to help you
                focus within.
              </p> */}
            </div>
          </div>
          <div className="contact-section-item">
            <div className="contact-item-heading">GROUP CLASSES</div>
            <div className="contact-item-info">
              {/* <p>
                Tap into your inner self and find flow and freedom both on and
                off the mat.
              </p> */}
            </div>
          </div>
          <div className="contact-section-item">
            <div className="contact-item-heading">COLLABORATION/RETREATS</div>
            <div className="contact-item-info">
              {/* <p>
                Empower yourself to take responsibility for your own health and
                happiness.
              </p> */}
            </div>
          </div>
        </div>

        {/* <div>
          <p className="contact-section-heading-bottom">
            Do you have any questions or need more information? CONTACT ME
          </p>
        </div> */}
        <hr />
      </section>
    </>
  );
}
