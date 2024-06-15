import { makeInstaller } from "@xm-element/utils";
import componens from "./components";
import '@xm-element/theme/index.css'

const installer = makeInstaller(componens);

export * from "@xm-element/components";
export default installer;
