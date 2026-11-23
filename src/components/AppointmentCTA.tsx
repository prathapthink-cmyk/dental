import { CalendarDays } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { whatsappUrl } from '../data/clinicData'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import ToothIcon from './ui/ToothIcon'

export default function AppointmentCTA() {
  return (
    <section aria-labelledby="cta-heading" className="bg-white px-5 pb-16 sm:px-8 sm:pb-20 lg:pb-24">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-mint via-[#b9e6cf] to-primary px-6 py-10 shadow-lift sm:px-12 lg:py-12">
          <div aria-hidden="true" className="absolute -right-10 -bottom-16 h-64 w-64 rounded-full bg-white/15" />
          <div aria-hidden="true" className="absolute right-1/3 -top-20 h-48 w-48 rounded-full bg-white/20" />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <ToothIcon className="hidden h-16 w-16 shrink-0 text-primary-dark sm:block" strokeWidth={3} />
              <div>
                <h2 id="cta-heading" className="text-2xl font-extrabold tracking-tight text-primary-dark sm:text-3xl">
                  Book Your Dental Appointment Today!
                </h2>
                <p className="mt-2 text-sm text-primary-dark/80 sm:text-base">
                  Get expert dental care for a healthier and brighter smile.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                href="#contact"
                variant="light"
                className="w-full sm:w-auto"
                icon={<CalendarDays className="h-4 w-4" aria-hidden="true" />}
              >
                Book Appointment
              </Button>
              <Button
                href={whatsappUrl()}
                external
                variant="light"
                className="w-full sm:w-auto"
                icon={<FaWhatsapp className="h-4.5 w-4.5 text-[#25D366]" aria-hidden="true" />}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
