import { makeInstaller } from '@xm-element/utils'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import commponents from './components.ts'
import '@xm-element/theme/index.css'

library.add(fas)
const installer = makeInstaller(commponents)
export * from '@xm-element/components'
export default installer
