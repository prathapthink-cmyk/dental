import { motion } from 'framer-motion'
import { Award, GraduationCap } from 'lucide-react'
import { doctors } from '../data/doctors'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Doctors() {
  return (
    <section id="doctors" aria-labelledby="doctors-heading" className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <SectionHeading
          id="doctors-heading"
          title="Meet Our Dental Experts"
          subtitle="Experienced professionals dedicated to your smile."
        />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {doctors.map((doc, i) => (
            <li key={doc.id} className={i === 2 ? 'sm:col-span-2 sm:mx-auto sm:max-w-[calc(50%-0.75rem)] lg:col-span-1 lg:max-w-none' : ''}>
              <Reveal delay={i * 0.1} className="h-full">
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-shadow duration-300 hover:shadow-lift"
                >
                  <div className="relative overflow-hidden bg-mint-light">
                    <img
                      src={doc.image}
                      alt={doc.imageAlt}
                      width={640}
                      height={853}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/4.2] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-primary-dark shadow-card">
                      <Award className="h-3.5 w-3.5" aria-hidden="true" />
                      {doc.experience}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-extrabold text-ink">{doc.name}</h3>
                    <p className="mt-1.5 flex items-start gap-2 text-sm text-muted">
                      <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {doc.qualification}
                    </p>
                    <p className="mt-3 inline-flex w-fit rounded-full bg-mint px-3 py-1 text-xs font-semibold text-primary-dark">
                      {doc.specialization}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{doc.description}</p>
                  </div>
                </motion.article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
