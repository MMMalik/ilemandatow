// Css
import "fontsource-lato";
import "tachyons/css/tachyons.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./src/styles/layout.css";
import "./src/styles/animate.css";
import "./src/styles/tooltip.css";
import "./src/styles/skins.css";
import "./src/styles/height.css";

// Icons
import "./src/icons";

// Components
import _wrapRootElementBrowser from "./src/layout/wrapRoot";
import _wrapPageElement from "./src/layout/wrapPage";

export const wrapRootElement = _wrapRootElementBrowser;
export const wrapPageElement = _wrapPageElement;
