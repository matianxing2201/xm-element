import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: 'dist/umd',
        lib: {
            entry: resolve(__dirname, './index.ts'),
            name: 'XmElement',
            fileName: 'index',
            formats: ['umd'], // 只生成umd格式文件
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'index.css'
                    return assetInfo.name as string
                },
            },
        },
    },
})
