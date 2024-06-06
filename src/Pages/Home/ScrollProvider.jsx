import React, { createContext, useState, useEffect } from "react";

const ScrollContext = createContext();

function ScrollProvider({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY); // Update scrollPosition on scroll event
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollPosition, setScrollPosition }}>
      {children}
    </ScrollContext.Provider>
  );
}

export { ScrollContext, ScrollProvider };
