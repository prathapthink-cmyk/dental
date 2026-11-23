import { motion } from 'framer-motion'
import { galleryItems } from '../data/gallery'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <SectionHeading
          id="gallery-heading"
          title="Our Clinic Gallery"
          subtitle="Take a look inside our clean, calm and modern clinic."
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {galleryItems.map((g, i) => (
            <li key={g.id}>
              <Reveal delay={(i % 3) * 0.08}>
                <motion.figure
                  whileHover="hover"
                  initial="rest"
                  className="group relative overflow-hidden rounded-2xl bg-mint shadow-card"
                >
                  <motion.img
                    src={g.image}
                    alt={g.alt}
                    width={900}
                    height={675}
                    loading="lazy"
                    decoding="async"
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.07 } }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/30 to-transparent px-4 pt-10 pb-3.5 text-sm font-semibold text-white">
                    {g.caption}
                  </figcaption>
                </motion.figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
