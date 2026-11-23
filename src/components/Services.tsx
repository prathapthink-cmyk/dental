import { motion } from 'framer-motion'
import type { MouseEvent } from 'react'
import { services } from '../data/services'
import { scrollToHash } from '../lib/scroll'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Services() {
  return (
    <section id="treatments" aria-labelledby="services-heading" className="bg-cream pt-8 pb-16 sm:pt-12 sm:pb-20 lg:py-20">
      <div className="container-page">
        <SectionHeading
          id="services-heading"
          title="Our Dental Services"
          subtitle="Comprehensive dental treatments for all ages."
        />

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:mt-12 lg:gap-5">
          {services.map(({ id, title, description, icon: Icon }, i) => (
            <li key={id}>
              <Reveal delay={(i % 4) * 0.07} className="h-full">
                <motion.a
                  href="#name"
                  onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault()
                    scrollToHash('#name')
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group flex h-full flex-col items-center rounded-2xl border border-line bg-white p-4 text-center shadow-card transition-colors duration-300 hover:border-primary/30 hover:bg-mint hover:shadow-lift sm:p-6"
                  aria-label={`${title}: book an appointment`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-light text-primary transition-colors duration-300 group-hover:bg-white sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-sm leading-snug font-bold text-ink sm:text-[15px]">{title}</h3>
                  <p className="mt-1.5 hidden text-xs leading-relaxed text-muted sm:block">{description}</p>
                </motion.a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
