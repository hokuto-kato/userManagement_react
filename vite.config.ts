import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pug from "@macropygia/vite-plugin-pug-static"
import { resolve } from "path"

export default defineConfig(({mode}) => {
	console.log("** mode **", mode)
	return {
		server: {
			open: true,
			host: true,
		},
		base: "./",
		root: "./src",
		css: {
			devSourcemap: true,
		},
		build: {
			outDir: "../docs",
			emptyOutDir: true,
			sourcemap: mode === "development",
			minify: mode === "production" ? "terser" : false,
			rollupOptions: {
				input: {
					main: resolve("./src/index.pug"),
				},
				output: {
					chunkFileNames: "js/app.[hash].js",
					entryFileNames: "js/app.[hash].js",
					assetFileNames: ({name}) => {
						if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
							return "img/[name].[hash][extname]"
						}
						if (/\.css$/.test(name ?? "")) {
							return "css/app.[hash][extname]"
						}
						return "assets/[name].[hash][extname]"
					},
				},
			},
		},
		plugins: [
			pug(),
			react()],
	}
})