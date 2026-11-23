# SmileCare Dental Clinic website

Static, responsive dental clinic site built with React 18, TypeScript, Vite, Tailwind CSS v4, Framer Motion and Lucide icons. No backend; it deploys as plain static files.

## Scripts

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
npm run lint
```

## Editing content

Everything editable lives in `src/data/`:

| File | What it controls |
| --- | --- |
| `clinicData.ts` | Clinic name, phone, WhatsApp number, email, address, opening hours, social URLs, map embed URL, site URL |
| `services.ts` | The 8 service cards and the contact-form treatment list |
| `doctors.ts` | Doctor profiles (sample data) |
| `testimonials.ts` | Patient testimonials (placeholder content, replace before launch) |
| `gallery.ts` | Gallery images and captions |

The page title, meta description, Open Graph tags and the `Dentist` JSON-LD in `index.html` are generated from `clinicData.ts` at build time (see the `clinicSeo` plugin in `vite.config.ts` and `src/lib/seo.ts`). Set `siteUrl` to your real domain before launch.

### Google Maps
In Google Maps choose Share > Embed a map, copy the `src` URL of the iframe and paste it into `mapEmbedUrl` in `clinicData.ts`. Until then a placeholder is shown.

### Images
Images are in `src/assets/images` (WebP). Replace a file with the same name to swap it, or re-generate from originals with:

```bash
node scripts/optimize-images.mjs <folder-with-source-jpgs>
```

The current images are AI-generated samples. Replace them with real clinic photos where possible.

## Appointment form

The site is static, so the form does not store or email anything. After validation it opens WhatsApp with a pre-filled message to the clinic number, and the UI states that the appointment is not confirmed until the clinic replies. To send to email or a CRM later, replace `onSubmit` in `src/components/Contact.tsx` with a call to a form service (for example Formspree) or a Cloudflare Pages Function.

## Deploy to Cloudflare Pages

1. Push the repository to GitHub/GitLab.
2. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git.
3. Build settings:
   - Framework preset: `Vite` (or None)
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION` = `22` (or newer)
4. Deploy. Or use Wrangler directly: `npm run build && npx wrangler pages deploy dist`.

`public/_headers` sets long-term caching for hashed assets. The site is a single page using anchor links, so no SPA redirect rules are needed.
