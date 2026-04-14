import { defineConfig } from 'vite'

export default defineConfig({
    slidev: {
        markdown: {
            markdownItSetup(md) {
                // This prevents URLs from becoming clickable in code blocks
                md.set({ linkify: false })
            },
        },
    },
})
