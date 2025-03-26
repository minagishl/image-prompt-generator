import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tsconfigPaths(),
      helmet(),
      ViteMinifyPlugin({
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: false,
      }),
      tailwindcss(),
      sitemap({
        hostname: 'https://image-prompt-generator.pages.dev',
      }),
    ],
    build: {
      minify: 'terser' as const,
    },
  }
})

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Image Prompt Generator',
  description:
    'This is a tool that easily generates prompts for use with AI image generation.',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
}

function helmet() {
  return {
    name: 'helmet-transform',
    transformIndexHtml: {
      order: 'pre' as const,
      handler: (html: string): string =>
        html.replace(
          /<head>([\s\S]*?)<\/head>/,
          `<head>$1<script type="application/ld+json">${JSON.stringify(
            schema,
          )}</script></head>`,
        ),
    },
  }
}
