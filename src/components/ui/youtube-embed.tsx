import { MultimediaProperties } from "../../data/feature-testimonial-content";

export default function YoutubeEmbed({
  width,
  height,
  embedId,
  className,
}: MultimediaProperties & { className: string }) {
  return (
    <div className={className || "video-responsive"}>
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded Youtube"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
