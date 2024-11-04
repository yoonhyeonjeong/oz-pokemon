import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: id => {
                    if (id.includes("node_modules")) {
                        const module = id.split("node_modules/").pop().split("/")[0];
                        return `vendor-${module}`;
                    }
                },
            },
        },
    },
});
