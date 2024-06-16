import { makeInstaller } from "@xm-element/utils";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import componens from "./components";
import '@xm-element/theme/index.css'

library.add(fas)
const installer = makeInstaller(componens);

export * from "@xm-element/components";
export default installer;
