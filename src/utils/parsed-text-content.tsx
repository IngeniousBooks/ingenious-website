interface ParsedTextContentProps {
  textContent: string;
  className: string;
}

export default function ParsedTextContent({
  textContent,
  className,
}: ParsedTextContentProps) {
  const paragraphs = textContent.split("\r");
  return (
    <>
      {paragraphs.map((paragraph) => {
        const textSections = paragraph.split(/(\*\*.*?\*\*)/);
        return (
          <p className={className} key={paragraph.substring(0, 16)}>
            {textSections.map((text) => {
              if (text.startsWith("**") && text.endsWith("**")) {
                return <strong key={text}>{text.slice(2, -2)}</strong>;
              }
              return text;
            })}
          </p>
        );
      })}
    </>
  );
}
