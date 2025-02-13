export function formatTextWithParagraphs(
  text: string,
  maxLinesBeforeBreak: number = 4
): string[] {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  let formattedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    formattedLines.push(lines[i]);
    if ((i + 1) % maxLinesBeforeBreak === 0) {
      formattedLines.push(""); // Adds a blank space (acts like a break)
    }
  }

  return formattedLines;
}

export const truncateText = (text: string, isMobile: boolean): string => {
  // Exact character counts from your examples
  const MOBILE_MAX = 220; // Mobile sample text length
  const DESKTOP_MAX = 344; // Desktop sample text length

  const maxLength = isMobile ? MOBILE_MAX : DESKTOP_MAX;

  if (!text || text.length <= maxLength) return text;

  // Smart truncation with sentence awareness
  const trimmed = text.slice(0, maxLength);
  const lastPunctuation = Math.max(
    trimmed.lastIndexOf(". "),
    trimmed.lastIndexOf("! "),
    trimmed.lastIndexOf("? "),
    trimmed.lastIndexOf(" ")
  );

  return (
    (lastPunctuation > 0 ? trimmed.slice(0, lastPunctuation) : trimmed) + "..."
  );
};