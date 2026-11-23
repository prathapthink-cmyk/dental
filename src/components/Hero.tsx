import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Star, Users } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import heroImage from '../assets/images/hero.webp'
import { clinic, whatsappUrl } from '../data/clinicData'
import Button from './ui/Button'
import ToothIcon from './ui/ToothIcon'

const trust = [
  { icon: ShieldCheck, label: 'Safe & Hygienic', sub: 'Environment' },
  { icon: null, label: 'Advanced', sub: 'Dental Technology' },
  { icon: Users, label: 'Experienced', sub: 'Dentists' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-mint-light via-cream to-cream"
    >
      {/* soft decorative blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-mint/60 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-full w-1/2 rounded-bl-[12rem] bg-mint/50 max-lg:hidden" />

      <div className="container-page relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-6 lg:py-20">
        {/* Image first on mobile; on desktop it sits on the right via lg:order-2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 mx-auto w-full max-w-xl lg:order-2 lg:max-w-none"
        >
          <div aria-hidden="true" className="absolute -bottom-5 -left-5 h-2/3 w-2/3 rounded-[3rem] bg-mint" />
          <img
            src={heroImage}
            alt={`Smiling patient relaxing in a dental chair at ${clinic.fullName}`}
            width={1152}
            height={864}
            fetchPriority="high"
            decoding="async"
            className="relative aspect-[4/3] w-full rounded-[2rem] rounded-tl-[6rem] rounded-br-[6rem] object-cover shadow-lift sm:rounded-tl-[8rem] sm:rounded-br-[8rem] lg:aspect-[5/4]"
          />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift sm:left-0 sm:-translate-x-4"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-primary">
              <Star className="h-5 w-5 fill-current" aria-hidden="true" />
            </span>
            <span className="text-sm leading-tight font-bold text-ink">
              Gentle &amp; painless
              <span className="block text-xs font-medium text-muted">care for every age</span>
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 max-w-xl lg:order-1"
        >
          <motion.span variants={item} className="badge">
            Your Family Dental Care
          </motion.span>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-5 text-4xl leading-[1.1] font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Healthy Smile,
            <br />
            <span className="text-primary">Happier You</span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Complete dental care for you and your family with modern technology and a gentle approach.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href="#contact"
              className="w-full sm:w-auto"
              trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
            >
              Book Appointment
            </Button>
            <Button
              href={whatsappUrl()}
              external
              variant="outline"
              className="w-full sm:w-auto"
              icon={<FaWhatsapp className="h-4.5 w-4.5 text-[#25D366]" aria-hidden="true" />}
            >
              Chat on WhatsApp
            </Button>
          </motion.div>

          <motion.ul variants={item} className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {trust.map(({ icon: Icon, label, sub }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-card">
                  {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : <ToothIcon className="h-6 w-6" strokeWidth={4} />}
                </span>
                <span className="text-xs leading-snug font-semibold text-ink">
                  {label}
                  <br />
                  {sub}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}
