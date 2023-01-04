import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue({
            reactivityTransform: true,
        }),
        splitVendorChunkPlugin(),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    console.log(id)
                }
            }
        }
    },
    preview: {
        port: 4000
    }
})
