import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import { clinic } from './src/data/clinicData.ts'
import { buildStructuredData, seo } from './src/lib/seo.ts'

const escapeAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** Fills {{TOKENS}} in index.html from src/data/clinicData.ts at build time. */
function clinicSeo(): Plugin {
  const tokens: Record<string, string> = {
    SEO_TITLE: escapeAttr(seo.title),
    SEO_DESCRIPTION: escapeAttr(seo.description),
    SITE_URL: escapeAttr(seo.url),
    OG_IMAGE: escapeAttr(seo.image),
    SITE_NAME: escapeAttr(clinic.fullName),
    // "<" is escaped so the JSON can never close the script tag early.
    JSON_LD: JSON.stringify(buildStructuredData(), null, 2).replace(/</g, '\\u003c'),
  }
  return {
    name: 'clinic-seo',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replace(/\{\{(\w+)\}\}/g, (m, key: string) => tokens[key] ?? m),
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), clinicSeo()],
})
