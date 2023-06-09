import {defineConfig} from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/afscme-signin.ts',
            formats: ['es'],
        },
        rollupOptions: {}
    }
})