import * as React from "react";
import { navigate } from "gatsby";
import { useRoutes } from "../../routes";

const NewPollIndex: React.FC = () => {
  const { routes } = useRoutes();

  React.useEffect(() => {
    navigate(routes.newPollForm.link());
  }, [routes]);

  return null;
};

export default NewPollIndex;
