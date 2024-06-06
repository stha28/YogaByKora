import { Image } from "antd";
import React, { useRef } from "react";

const ScrollableImage = ({ images }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount =
        direction === "left" ? -current.clientWidth : current.clientWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="scrollable-container my-4">
      <button className="scroll-button left" onClick={() => scroll("left")}>
        {"<"}
      </button>
      <div className="scrollable-images" ref={scrollContainerRef}>
        {images.map((image, index) => (
          <div className="img-container" key={index}>
            <img src={image.url} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={() => scroll("right")}>
        {">"}
      </button>
    </div>
  );
};

export default ScrollableImage;
