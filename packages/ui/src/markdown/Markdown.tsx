import * as React from "react";
import ReactMarkdown from "react-markdown";
import Link from "../link";

const MdLink = ({ href, children }: any) => {
  return (
    <Link to={href} primary={true}>
      {children}
    </Link>
  );
};

const MdParagraph = ({ children }: any) => {
  return <p className="lh-copy">{children}</p>;
};

const MdHeading = ({ children, ...props }: any) => {
  return React.createElement(
    `h${props.level}`,
    { className: "ma0 pa0" },
    children
  );
};

const Markdown: React.FC = ({ children }) => {
  if (typeof children !== "string") {
    return null;
  }

  return (
    <ReactMarkdown
      renderers={{ link: MdLink, heading: MdHeading, paragraph: MdParagraph }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
