import CMS from "netlify-cms-app";
import { NanoIdControl, NanoIdPreview } from "./nanoId";

CMS.registerWidget("nanoid", NanoIdControl, NanoIdPreview);
