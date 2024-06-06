import AboutMe from "../AboutMe";
import Contact from "../Contact";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Instagram from "../Instagram";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Navbar from "../Navbar";
import ScrollToTop from "../ScrollToTop";
import Wave from "../Wave";

export default function Home() {
  return (
    <>
      <div
        className="body--div"
        // style={{ background: "#f3f6f8"}}
        // style={{
        //   backgroundImage: "../img/back.webp",
        //   backgroundSsize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <ScrollToTop />
        <HeroSection title="Welcome" page="homepage" classname="home" />
        <AboutMe />
        {/* <MySkills /> */}
        <MyPortfolio />
        <Contact />
        <Instagram />
        <Footer />
      </div>
    </>
  );
}
