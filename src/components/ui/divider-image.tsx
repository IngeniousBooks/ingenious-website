export interface DividerImageProps {
  imageUrl: string;
  altText: string;
}

export default function DividerImage({ imageUrl, altText }: DividerImageProps) {
  return (
    <section
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "60vh",
      }}
      aria-label={altText}
    ></section>
  );
}
