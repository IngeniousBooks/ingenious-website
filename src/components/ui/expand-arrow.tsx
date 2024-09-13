import { useState } from "react";
import { houseColours } from "../../data/house-style";

export default function ExpandArrow({
  handleClick,
  isOpen,
}: {
  handleClick: (isOpen: boolean) => void;
  isOpen: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleArrowClick = (isOpen: boolean) => {
    handleClick(isOpen);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleArrowClick(isOpen)}
    >
      <path
        d="M120,60A60,60,0,1,1,60,0a60.048,60.048,0,0,1,60,60"
        fill={
          isHovered ? houseColours["--d-grey"] : houseColours["--brand-orange"]
        }
      />
      <path
        d="M58.6,30h2.5V89.2L79.3,71l1.8,1.8L59.8,94,38.6,72.9l1.8-1.8L58.6,89.2Z"
        fill={
          isHovered ? houseColours["--brand-orange"] : houseColours["--white"]
        }
      />
      <path
        d="M61.1,90.9H58.6V31.8L40.4,49.9l-1.8-1.8L59.9,26.9,81.1,48l-1.8,1.8-18.2-18Z"
        fill={
          isHovered ? houseColours["--brand-orange"] : houseColours["--white"]
        }
      />
    </svg>
  );
}
