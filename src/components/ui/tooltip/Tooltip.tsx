import * as React from "react";
import { usePopper } from "react-popper";
import { useTheme } from "@theme";

interface Props {
  title: string;
}

const Tooltip: React.FC<Props> = ({ children, title }) => {
  const [
    referenceElement,
    setReferenceElement,
  ] = React.useState<HTMLDivElement | null>(null);
  const [
    popperElement,
    setPopperElement,
  ] = React.useState<HTMLDivElement | null>(null);
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement
  );
  const { theme } = useTheme();
  const { bgSecondary, textMuted } = theme;

  React.useEffect(() => {
    if (update) {
      update();
    }
  }, [update, title]);

  return (
    <>
      <div className="tooltip dib" ref={setReferenceElement}>
        {children}
      </div>
      <div
        ref={setPopperElement}
        className={`tooltiptext f6 br2 pa1 ${textMuted} bg-${bgSecondary}`}
        style={styles.popper}
        {...attributes.popper}
      >
        {title}
      </div>
    </>
  );
};

export default Tooltip;
