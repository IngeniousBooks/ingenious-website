import { useState } from "react";
import { houseColours } from "../../data/house-style";

export default function UpArrow() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleArrowClick = () => {
    window.scrollTo({ behavior: "smooth" });
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleArrowClick}
    >
      <path
        d="M120,60A60,60,0,1,1,60,0a60.048,60.048,0,0,1,60,60"
        fill={
          isHovered ? houseColours["--l-cream"] : houseColours["--brand-orange"]
        }
      />
      <path
        d="M61.1,94H58.6V31.7L37.4,52.9l-1.8-1.8L59.8,26.9,84.1,51.1l-1.8,1.8L61.1,31.7Z"
        fill={
          isHovered ? houseColours["--brand-orange"] : houseColours["--white"]
        }
      />
    </svg>
  );
}
