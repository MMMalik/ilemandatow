import * as React from "react";
import { Link } from "@ilemandatow/ui";
import { useRoutes } from "../routes";

/**
 * Please note that 404 page is outside of language context.
 * Polish phrases are therefore hardcoded.
 */
const Page404: React.FC = () => {
  const { routes } = useRoutes();

  return (
    <div className="tc">
      <div className="f2">{"404"}</div>
      <div className="f4 mt3">{"Ta strona nie istnieje"}</div>
      <div className="mt3">
        <Link to={routes.home.link()}>{"Wróć do strony głównej"}</Link>
      </div>
    </div>
  );
};

export default Page404;
