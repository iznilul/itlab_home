import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue"
import path from "path"

export default defineConfig(
    {
        // build:{
        //     assetsDir: 'static/img/',
        //     rollupOptions: {
        //         output: {
        //             chunkFileNames: 'static/js/[name]-[hash].js',
        //             entryFileNames: 'static/js/[name]-[hash].js',
        //             assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        //         },
        //     },
        // },
        plugins: [vue()],
        publicPath:'./',
        base: './',
        resolve: {
            alias: {
                // 注意！键必须以斜线开始和结束
                '/@/': path.resolve(__dirname, './src')
            },
            extensions: ['.js', '.vue', '.json'],
        },
    }
)
