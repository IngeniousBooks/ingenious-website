import { useState, useEffect } from "react";
import LeftDirection from "../ui/left-button";
import RightDirection from "../ui/right-button";
import carouselImages from "../../data/carousel-images";
import PauseIcon from "../ui/pause-button";

export default function HeroCarousel() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const handleAutoplay = () => {
      if (!isPaused) {
        nextImage();
      }
    };

    intervalId = setInterval(handleAutoplay, 5000);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPaused]);

  return (
    <section className="carousel-container">
      <button
        className="carousel-left-button"
        onClick={() => {
          setImageIndex((prevIndex) =>
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
          );
        }}
      >
        <LeftDirection />
      </button>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {carouselImages.map(({ src, alt }) => {
          return (
            <img
              key={src}
              className="carousel-image"
              style={{ translate: `${-100 * imageIndex}%` }}
              src={src}
              alt={alt}
            />
          );
        })}
      </div>

      <button
        className="carousel-right-button"
        onClick={() => {
          setImageIndex((prevIndex) =>
            prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
          );
        }}
      >
        <RightDirection />
      </button>
      <ul className="indicator-panel">
        {carouselImages.map((image, index) => (
          <li
            key={image.src}
            className={`selector ${index === imageIndex ? "active" : ""}`}
            onClick={() => {
              setImageIndex(index);
            }}
          >
            <svg
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              height={20}
              width={20}
              style={{ verticalAlign: "top" }}
            >
              <circle
                cx="10"
                cy="10"
                r="10"
                fill={index === imageIndex ? "#d54b1a" : "none"}
                strokeWidth={0.4}
                stroke="#484848"
              />
            </svg>
          </li>
        ))}
        <li
          className="pause-icon"
          onClick={() => setIsPaused((currentStatus) => !currentStatus)}
        >
          <PauseIcon isActive={isPaused} />
        </li>
      </ul>
    </section>
  );
}
