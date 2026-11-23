/**
 * Converts source images (PNG/JPG) into optimized WebP files in src/assets/images.
 * Usage: node scripts/optimize-images.mjs <source-dir>
 * Source files are matched by name (see `jobs`), e.g. hero.jpg -> hero.webp
 */
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const src = process.argv[2]
if (!src) {
  console.error('Usage: node scripts/optimize-images.mjs <source-dir>')
  process.exit(1)
}

const out = path.resolve('src/assets/images')
await mkdir(out, { recursive: true })

const jobs = [
  { name: 'hero', width: 1400, quality: 78 },
  { name: 'about', width: 1200, quality: 78 },
  { name: 'doctor-1', width: 640, quality: 80 },
  { name: 'doctor-2', width: 640, quality: 80 },
  { name: 'doctor-3', width: 640, quality: 80 },
  { name: 'avatar-1', width: 160, quality: 80 },
  { name: 'avatar-2', width: 160, quality: 80 },
  { name: 'avatar-3', width: 160, quality: 80 },
  { name: 'gallery-reception', width: 900, quality: 76 },
  { name: 'gallery-treatment-room', width: 900, quality: 76 },
  { name: 'gallery-equipment', width: 900, quality: 76 },
  { name: 'gallery-interior', width: 900, quality: 76 },
  { name: 'gallery-consultation', width: 900, quality: 76 },
  { name: 'gallery-technology', width: 900, quality: 76 },
]

for (const job of jobs) {
  const input = path.join(src, `${job.name}.jpg`)
  const info = await sharp(input)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toFile(path.join(out, `${job.name}.webp`))
  console.log(`${job.name}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`)
}

// Open Graph image (JPEG 1200x630) goes to /public so it has a stable URL.
await sharp(path.join(src, 'og-image.jpg'))
  .resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.resolve('public/og-image.jpg'))
console.log('og-image.jpg written to public/')
