import makeInstaller from "./makeInstaller";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import commponents from './components.ts'

import '@xm-element/theme/index.css'

library.add(fas)
const installer = makeInstaller(commponents)

export * from '../components'
export default installer
