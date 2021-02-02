import * as React from "react";
import { Footer, FooterLink, Icon } from "@ilemandatow/ui";
import { useSiteMetaData } from "../../data";
import { useRoutes } from "../../routes";
import { useTranslation } from "../../i18n";

const AppFooter: React.FC = () => {
  const { repoUrl, appVersion } = useSiteMetaData();
  const { routes } = useRoutes();
  const { t } = useTranslation();
  const tag = `v${appVersion}`;

  return (
    <Footer
      left={
        <FooterLink external={true} to={`${repoUrl}/releases/tag/${tag}`}>
          {tag}
        </FooterLink>
      }
      center={
        <FooterLink external={true} to={repoUrl}>
          <Icon size="lg" icon={["fab", "github"]} />
        </FooterLink>
      }
      right={<FooterLink to={routes.privacy.link()}>{t("privacy")}</FooterLink>}
    />
  );
};

export default AppFooter;
