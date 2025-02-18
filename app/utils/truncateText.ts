/**
 * Truncates a given text to a specified maximum length and appends ellipsis ("...") if it exceeds that length.
 * @param {string} text - The input text to truncate.
 * @param {number} maxLength - The maximum number of characters to display.
 * @returns {string} - The truncated text with ellipsis if necessary.
 */
export const truncateText = (text: string, maxLength: number = 48): string => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  