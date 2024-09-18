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
          <p className={className} key={paragraph.substring(0, 12)}>
            {textSections.map((text) => {
              const italicSplit = text.split(/(__.*?__)/);
              return italicSplit.map((t) => {
                if (t.startsWith("**") && t.endsWith("**")) {
                  return (
                    <span className="bold" key={t}>
                      {t.slice(2, -2)}
                    </span>
                  );
                }
                if (t.startsWith("__") && t.endsWith("__")) {
                  return (
                    <span key={t} className="italic">
                      {t.slice(2, -2)}
                    </span>
                  );
                }
                return t;
              });
            })}
          </p>
        );
      })}
    </>
  );
}
