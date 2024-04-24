import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const navigate = useNavigate();

  const navigateToMyJourney = () => {
    navigate("/my-journey");
  };

  const navigateToContact = () => {
    navigate("/contact");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img
          className="logo"
          onClick={navigateToHome}
          src="/img/Heliotrope.svg"
          alt="Logoipsum"
        />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={navigateToHome}
              // activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={navigateToMyJourney}
              // activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              duration={500}
              to="MyJourney"
              className="navbar--content"
            >
              Journey
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="footer"
              className="navbar--content"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
