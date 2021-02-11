type Page = "more" | number;

export const pagesToShow = (
  first: number,
  current: number,
  pages: number
): Page[] => {
  const offsetLeft = current - 1;
  const offsetRight = current + 1;
  const middle = [offsetLeft, current, offsetRight].filter(
    (p) => p >= first && p <= pages
  );
  const middleFirst = middle[0];
  const middleLast = middle[middle.length - 1];

  const result: Page[] = [...middle];

  if (middleFirst > first) {
    if (middleFirst - first > 1) {
      result.unshift(middleFirst - first > 2 ? "more" : middleFirst - 1);
    }
    result.unshift(first);
  }

  if (middleLast < pages) {
    if (pages - middleLast > 1) {
      result.push(pages - middleLast > 2 ? "more" : middleLast + 1);
    }
    result.push(pages);
  }

  return result;
};
