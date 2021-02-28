import * as React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "../../i18n";

interface Props {
  /**
   * Page's title.
   */
  title: string | string[];
  /**
   * Page's description.
   */
  description: string;
}

const SEO: React.FC<Props> = ({ title, description }) => {
  const { language } = useTranslation();
  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/png" href="favicon.png" />
    </Helmet>
  );
};

export default SEO;
