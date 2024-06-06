import React from "react";

export default function Wave(props) {
  return (
    <div class="wave-container">
      <svg
        class="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 310"
      >
        <path
          fill={props.color}
          fill-opacity="1"
          d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,176C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
