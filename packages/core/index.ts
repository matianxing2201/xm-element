import { makeInstaller } from '@xm-element/utils'
import commponents from './components.ts'
import '@xm-element/theme/index.css'


const installer = makeInstaller(commponents)
export * from '@xm-element/components'
export default installer
