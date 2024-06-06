export default function HeroSection(props) {
  const { page, classname, title } = props;
  return (
    <>
      <section id="heroSection" className={`hero--section ${classname}`}>
        <div className="hero--section--content--box">
          <div
            className="hero--section--title--color"
            style={{ ...(page == "about-section" && { fontSize: "77px" }) }}
          >
            {title}
          </div>
          {page == "homepage" && (
            <div className="hero--section-quote">
              <div>
                "Your body exists in the past and your mind exists in the
                future. In yoga, they come together in the present."
              </div>
              <div>- B.K.S. Iyengar</div>
            </div>
          )}
        </div>
      </section>
      {page !== "about-section" && (
        <div
          class="wave-container"
          style={{ ...(page !== "homepage" && { marginBottom: "15px" }) }}
        >
          <svg
            class="wave"
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
        // <div className="wave-container">
        //   <svg
        //     className="wave"
        //     xmlns="http://www.w3.org/2000/svg"
        //     viewBox="0 0 1440 310"
        //   >
        //     <defs>
        //       <pattern
        //         id="imagePattern"
        //         patternUnits="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,176C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        //         width="100%"
        //         height="100%"
        //       >
        //         <image
        //           href="../img/back.webp"
        //           x="0"
        //           y="0"
        //           width="1440"
        //           height="310"
        //         />
        //       </pattern>
        //     </defs>
        //     <path
        //       fill="url(#imagePattern)"
        //       fill-opacity="1"
        //       d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,176C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        //     ></path>
        //   </svg>
        // </div>
      )}
    </>
  );
}
