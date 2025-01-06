import { defineConfig } from 'vite'
import { readdirSync } from 'fs'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { includes, map, filter } from 'lodash-es'
import dts from 'vite-plugin-dts'

// 读取目录下的所有子目录，过滤出子文件夹目录名称 并返回
function getDirectoriesSync(basePath: string) {
    const entries = readdirSync(basePath, { withFileTypes: true });

    return map(
        filter(entries, (entry) => entry.isDirectory()),
        (entry) => entry.name
    );
}

export default defineConfig({
    plugins: [
        vue(),
        dts({
            tsconfigPath: '../../tsconfig.build.json',
            outDir: 'dist/types'
        }),
    ],
    build: {
        outDir: 'dist/es',
        // 库模式配置
        lib: {
            entry: resolve(__dirname, './index.ts'),
            name: 'XmElement',
            fileName: 'index',
            formats: ['es']
        },
        rollupOptions: {
            // 以下模块作为外部依赖，不打包到最终文件中
            external: [
                'vue',
                '@fortawesome/fontawesome-svg-core',
                '@fortawesome/free-solid-svg-icons',
                '@fortawesome/vue-fontawesome',
                '@popperjs/core',
                'async-validator',
            ],
            output: {
                exports: 'named', // 使用命名导出
                globals: {
                    vue: 'Vue'
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'index.css'
                    return assetInfo.name as string
                },
                // 分包 根据模块路径将代码拆分为不同的 chunk。
                manualChunks(id) {
                    if (includes(id, 'node_modules')) return 'vendor';
                    if (includes(id, '/packages/hooks')) return 'hooks';
                    if (includes(id, '/packages/utils')) return 'utils';

                    for (const item of getDirectoriesSync('../components')){
                        if (includes(id, `/packages/components/${item}`)) return item;
                    }
                }
            }
        }
    }
})
