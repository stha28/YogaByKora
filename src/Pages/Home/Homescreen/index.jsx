import AboutMe from "../AboutMe";
import Contact from "../Contact";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Navbar from "../Navbar";
import ScrollToTop from "../ScrollToTop";

export default function Home() {
  return (
    <>
      <div className="body--div">
        Yoga by kora Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptate excepturi minima perferendis deleniti magnam necessitatibus.
        Nostrum harum perferendis ut ea rerum corrupti, unde repudiandae magnam
        autem voluptatem! Minus labore itaque vel nam dignissimos in quae
        doloremque quia, fugit error aspernatur animi molestias numquam fugiat.
        Beatae eveniet optio in hic nostrum.
        <ScrollToTop />
        <HeroSection />
        <AboutMe />
        <MySkills />
        <MyPortfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
