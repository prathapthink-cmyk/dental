import { motion } from 'framer-motion'
import { Award, Heart, MonitorCheck, ShieldCheck } from 'lucide-react'
import aboutImage from '../assets/images/about.webp'
import Reveal from './ui/Reveal'
import ToothIcon from './ui/ToothIcon'

const features = [
  { icon: Award, label: 'Experienced Team' },
  { icon: MonitorCheck, label: 'Modern Equipment' },
  { icon: Heart, label: 'Patient-Centric Care' },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="overflow-x-clip bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <img
              src={aboutImage}
              alt="Modern dental treatment room with a green dental chair, overhead light and digital x-ray monitor"
              width={1152}
              height={864}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
            />
            <div aria-hidden="true" className="absolute -bottom-4 -left-4 -z-10 h-1/2 w-1/2 rounded-3xl bg-mint" />

            {/* decorative tooth + shield on a soft mint blob */}
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-3 -bottom-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-mint to-white shadow-lift sm:-right-8 sm:h-36 sm:w-36"
            >
              <ToothIcon className="h-16 w-16 text-primary/80 sm:h-20 sm:w-20" fill="#ffffff" strokeWidth={2.5} />
              <span className="absolute right-2 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-card sm:right-3 sm:bottom-4 sm:h-11 sm:w-11">
                <ShieldCheck className="h-5 w-5" />
              </span>
            </motion.div>
          </div>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 -right-10 -z-0 h-72 w-72 rounded-full bg-gradient-to-br from-mint-light to-transparent"
          />

          <Reveal delay={0.1} className="relative">
            <span className="badge">About Us</span>
            <h2
              id="about-heading"
              className="mt-4 max-w-md text-3xl leading-tight font-extrabold tracking-tight text-ink sm:text-4xl"
            >
              Modern Dental Care with a Personal Touch
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              We combine advanced dental technology, experienced dentists, and a patient-friendly approach to
              give you the best dental care in a comfortable environment.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {features.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-cream/60 p-3 sm:flex-col sm:bg-transparent sm:border-0 sm:p-0 sm:text-center"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mint text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-semibold text-ink">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
