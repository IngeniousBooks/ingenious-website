import { useState } from "react";

const DarkLeftButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <svg
      id="b"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 58 58"
      height={58}
      width={58}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <defs>
        <clipPath id="d">
          <rect
            x="20"
            y="16.25"
            width="13.79"
            height="25.49"
            fill="none"
            strokeWidth="0"
          />
        </clipPath>
      </defs>
      <g id="c">
        <circle
          cx="29"
          cy="29"
          r="29"
          fill={isHovered ? "#fff" : "#484848"}
          strokeWidth="0"
        />
        <g clipPath="url(#d)">
          <path
            d="M20.31,28.26c-.41.41-.41,1.07,0,1.48l11.7,11.7c.41.41,1.08.41,1.48,0,.41-.41.41-1.08,0-1.48l-10.96-10.95,10.96-10.96c.42-.4.44-1.06.04-1.48-.4-.42-1.06-.44-1.48-.04-.01.01-.03.03-.04.04l-11.7,11.7Z"
            fill={isHovered ? "#484848" : "#fff"}
            strokeWidth="0"
          />
        </g>
      </g>
    </svg>
  );
};

export default DarkLeftButton;
