import * as React from "react";
import { Footer, FooterLink, FooterInfo, Icon } from "@ilemandatow/ui";
import { useSiteMetaData } from "../../data";
import { useRoutes } from "../../routes";
import { useTranslation } from "../../i18n";

const AppFooter: React.FC = () => {
  const { repoUrl, appVersion } = useSiteMetaData();
  const { routes } = useRoutes();
  const { t } = useTranslation();

  return (
    <Footer
      left={<FooterInfo>{`v${appVersion}`}</FooterInfo>}
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
