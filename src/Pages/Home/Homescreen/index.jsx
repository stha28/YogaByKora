import AboutMe from "../AboutMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import ScrollToTop from "../ScrollToTop";

export default function Home() {
  return (
    <>
      <ScrollToTop/>
      <HeroSection />
      <AboutMe />
      <MySkills />
      <MyPortfolio />
      <Footer />
    </>
  );
}
