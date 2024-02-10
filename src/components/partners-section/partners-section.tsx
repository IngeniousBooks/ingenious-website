import IngeniousIcon from "../ui/icon";

export default function PartnersSection() {
  return (
    <section className="partners-section">
      <h2>We have collaborated with</h2>
      <img
        className="partners-logos-img"
        src="/assets/partner-logos.png"
        alt="A collection of company logos for satisfied clients of ours to include Faber & Faber, Penguin Random House, Hachette Book Group, The FA, Museum of London, and The Open University."
      />
      <div className="end-section-icon">
        <IngeniousIcon />
      </div>
    </section>
  );
}
