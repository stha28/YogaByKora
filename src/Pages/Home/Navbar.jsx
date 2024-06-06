import { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { ScrollContext, ScrollProvider } from "./ScrollProvider";


function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const closeDropdown = () => {
    setDropdownActive(false);
  };

  const navigate = useNavigate();

  const navigateToMyJourney = () => {
    closeMenu();
    closeDropdown();
    navigate("/my-journey");
  };

  const navigateToRetreat = () => {
    closeMenu();
    closeDropdown();
    navigate("/yoga-retreat");
  };

  const navigateToContact = () => {
    closeMenu();
    closeDropdown();
    // navigate("/contact");
    navigate("/", { scroll: true, offset: 5000 });
  };

  const navigateToHome = () => {
    closeMenu();
    closeDropdown();
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        closeMenu();
        closeDropdown();
      }
    };

    const handleClickOutside = (event) => {
      if (
        event.target.closest(".navbar--dropdown") === null &&
        dropdownActive
      ) {
        closeDropdown();
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownActive]);

  return (
    <nav
      className={`navbar custom-navbar ${navActive ? "active" : ""}`}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        position: "fixed",
      }}
    >
      <div>
        <img
          className="logo"
          onClick={navigateToHome}
          // src="/img/Heliotrope.svg"
          src="/img/lo1.png"
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
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              duration={500}
              to="MyJourney"
              className="navbar--content"
            >
              About
            </Link>
          </li>
          <li className="nav-item navbar--dropdown">
            <Link
              onClick={toggleDropdown}
              spy={true}
              smooth={true}
              duration={500}
              to="Courses"
              className="navbar--content"
            >
              Yoga & Wellness
            </Link>
            {dropdownActive && (
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/courses/nutrition">
                  Nutrition
                </a>
                <a className="dropdown-item" href="/courses/massage">
                  Massage
                </a>
                <a className="dropdown-item" href="/courses/yoga">
                  Traditional Hatha Yoga
                </a>
                <a className="dropdown-item" href="/courses/sound-healing">
                  Sound Healing Bowl
                </a>
              </div>
            )}
          </li>
          <li>
            <Link
              onClick={navigateToRetreat}
              spy={true}
              smooth={true}
              duration={500}
              to="Retreat"
              className="navbar--content"
            >
              Retreat
            </Link>
          </li>
          <li>
            <Link
              onClick={navigateToContact}
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
