declare const PROD: boolean;
declare const DEV: boolean;
declare const TEST: boolean;

declare module "*.vue" {
    import type { DefineComponent } from "vue"; 
    const vueComponent: DefineComponent<{}, {}, any>; 
    export default vueComponent;
}