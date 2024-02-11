import DarkLeftButton from "../ui/dark-left-button";
import DarkRightButton from "../ui/dark-right-button";
import IngeniousIcon from "../ui/icon";

export default function TestimonialsCarousel() {
  return (
    <section id="testimonials" className="testimonials-carousel-section">
      <h2>Hear from our publishing partners</h2>
      <button className="carousel-left-button testimonial-button">
        <DarkLeftButton />
      </button>
      <p className="testimonials-carousel-body-text">
        You should 100% hire James to design your book. I had a massive 672-page
        photobook that needed to be put together and James created dozens of
        page layouts designed to keep readers/viewers engaged through the whole
        thing. When the book’s layout needed changes I hadn’t foreseen, James
        used his expertise to do what was required. Each time, I was blown away
        by the solutions he came up with, and this made the process faster too.
        James handled feedback effortlessly and efficiently. He was remarkably
        fast throughout the entire process and communicated perfectly clearly.
        I’m honored to list James as the designer for my book.
      </p>
      <p className="testimonials-carousel-citation">
        Imran Nuri, self-published author of Advice from America
      </p>
      <button className="carousel-right-button testimonial-button">
        <DarkRightButton />
      </button>
      <div className="end-section-icon">
        <IngeniousIcon />
      </div>
    </section>
  );
}
