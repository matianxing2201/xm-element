import type { App, Plugin } from "vue";
import { each } from "lodash-es";
// import {
//     provideGlobalConfig,
//     type ConfigProviderProps,
// } from "@xm-element/components"
export function makeInstaller(componets: Plugin[]) {
    const installer = (app: App) => {
        each(componets, (c) => app.use(c));
        // if (opts) provideGlobalConfig(opts, app, true);
    };

    return installer as Plugin;
}

export default makeInstaller;
