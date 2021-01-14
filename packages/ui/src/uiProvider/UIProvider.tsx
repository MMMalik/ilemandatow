import * as React from "react";
import LinkInternalFallback from "./LinkInternalFallback";

interface Props {
  LinkInternalComponent?: typeof LinkInternalFallback;
}

const fallbackUIContext = {
  LinkInternalComponent: LinkInternalFallback,
};

export const UIContext = React.createContext<Required<Props>>(
  fallbackUIContext
);

export const useUIContext = () => {
  return React.useContext(UIContext);
};

const UIProvider: React.FC<Props> = ({ children, ...ctx }) => {
  return (
    <UIContext.Provider value={{ ...fallbackUIContext, ...ctx }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
