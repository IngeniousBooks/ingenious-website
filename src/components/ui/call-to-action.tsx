export default function CallToAction({ ctaText }: { ctaText: string }) {
  return (
    <section className="call-to-action">
      <h2>{ctaText}</h2>
      <button>book a meeting</button>
    </section>
  );
}
