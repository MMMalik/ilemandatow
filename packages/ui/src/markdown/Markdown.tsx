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

const Markdown: React.FC = ({ children }) => {
  if (typeof children !== "string") {
    return null;
  }

  return (
    <ReactMarkdown renderers={{ link: MdLink, paragraph: MdParagraph }}>
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
