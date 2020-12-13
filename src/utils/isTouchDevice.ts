export const isTouchDevice = () => {
  return (
    true ==
    ("ontouchstart" in window ||
      /* eslint-disable-next-line */
      // @ts-ignore
      (window.DocumentTouch && document instanceof DocumentTouch))
  );
};
