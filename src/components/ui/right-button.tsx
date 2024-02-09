import { useState } from "react";
export default function RightDirection() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <svg
      id="a"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height={58}
      width={58}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <defs>
        <clipPath id="b">
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
      <g opacity=".5">
        <circle
          cx="29"
          cy="29"
          r="29"
          fill={isHovered ? "#484848" : "#fff"}
          strokeWidth="0"
        />
        <g clipPath="url(#b)">
          <path
            d="M20.31,28.26c-.41.41-.41,1.07,0,1.48l11.7,11.7c.41.41,1.08.41,1.48,0,.41-.41.41-1.08,0-1.48l-10.96-10.95,10.96-10.96c.42-.4.44-1.06.04-1.48-.4-.42-1.06-.44-1.48-.04-.01.01-.03.03-.04.04l-11.7,11.7Z"
            fill={isHovered ? "#fff" : "#303030"}
            strokeWidth="0"
          />
        </g>
      </g>
    </svg>
  );
}
