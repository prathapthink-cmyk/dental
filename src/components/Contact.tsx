import { motion } from 'framer-motion'
import { Clock, Info, Mail, MapPin, Phone, Send } from 'lucide-react'
import { type ChangeEvent, type FormEvent, type ReactNode, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { clinic, formattedAddress } from '../data/clinicData'
import { treatmentOptions } from '../data/services'
import {
  type AppointmentForm,
  type FormErrors,
  emptyForm,
  todayISO,
  validateForm,
} from '../lib/validation'
import { buildAppointmentLink } from '../lib/whatsapp'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const fieldClass =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'

interface FieldProps {
  id: keyof AppointmentForm
  label: string
  error?: string
  required?: boolean
  children: ReactNode
  className?: string
}

function Field({ id, label, error, required, children, className = '' }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

const details = [
  { icon: MapPin, label: 'Address', value: formattedAddress, href: clinic.mapSearchUrl },
  { icon: Phone, label: 'Phone', value: clinic.phone.display, href: `tel:${clinic.phone.tel}` },
  { icon: Mail, label: 'Email', value: clinic.email, href: `mailto:${clinic.email}` },
] as const

export default function Contact() {
  const [values, setValues] = useState<AppointmentForm>(emptyForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [sentLink, setSentLink] = useState<string | null>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name as keyof AppointmentForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validateForm(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      // Move focus to the first invalid field for keyboard / screen-reader users.
      const first = Object.keys(found)[0]
      document.getElementById(first)?.focus()
      return
    }
    const link = buildAppointmentLink(values)
    setSentLink(link)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const aria = (id: keyof AppointmentForm) => ({
    'aria-invalid': errors[id] ? true : undefined,
    'aria-describedby': errors[id] ? `${id}-error` : undefined,
  })
  const border = (id: keyof AppointmentForm) => (errors[id] ? 'border-red-400' : 'border-line')

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <SectionHeading
          id="contact-heading"
          title="Visit or Contact Us"
          subtitle="Request an appointment or ask us anything. We are happy to help."
        />

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-5 lg:gap-10">
          {/* Info + map */}
          <Reveal className="space-y-6 lg:col-span-2">
            <ul className="space-y-4 rounded-3xl border border-line bg-cream/60 p-6">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</p>
                    <a
                      href={href}
                      target={label === 'Address' ? '_blank' : undefined}
                      rel={label === 'Address' ? 'noopener noreferrer' : undefined}
                      className="text-sm font-semibold break-words text-ink transition-colors hover:text-primary"
                    >
                      {value}
                    </a>
                  </div>
                </li>
              ))}
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint text-primary">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold tracking-wide text-muted uppercase">Working Hours</p>
                  <dl className="mt-1 space-y-1 text-sm">
                    {clinic.hours.map((h) => (
                      <div key={h.days} className="flex justify-between gap-4">
                        <dt className="text-muted">{h.days}</dt>
                        <dd className="font-semibold text-ink">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            </ul>

            <div className="overflow-hidden rounded-3xl border border-line bg-mint-light">
              {clinic.mapEmbedUrl ? (
                <iframe
                  title={`Map showing the location of ${clinic.fullName}`}
                  src={clinic.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-64 flex-col items-center justify-center gap-3 px-6 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-card">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold text-ink">Google Maps embed placeholder</p>
                  <p className="text-xs text-muted">
                    Add your embed URL to <code className="rounded bg-white px-1">mapEmbedUrl</code> in
                    clinicData.ts.
                  </p>
                  <a
                    href={clinic.mapSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              )}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              noValidate
              aria-labelledby="form-heading"
              className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8"
            >
              <h3 id="form-heading" className="text-xl font-extrabold text-ink">
                Request an Appointment
              </h3>
              <p className="mt-1 mb-6 text-sm text-muted">
                Fill in your details and we will open WhatsApp with your request ready to send.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full name" required error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={values.name}
                    onChange={onChange}
                    className={`${fieldClass} ${border('name')}`}
                    {...aria('name')}
                  />
                </Field>
                <Field id="phone" label="Phone number" required error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={values.phone}
                    onChange={onChange}
                    className={`${fieldClass} ${border('phone')}`}
                    {...aria('phone')}
                  />
                </Field>
                <Field id="email" label="Email (optional)" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={onChange}
                    className={`${fieldClass} ${border('email')}`}
                    {...aria('email')}
                  />
                </Field>
                <Field id="date" label="Preferred appointment date" required error={errors.date}>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={todayISO()}
                    value={values.date}
                    onChange={onChange}
                    className={`${fieldClass} ${border('date')}`}
                    {...aria('date')}
                  />
                </Field>
                <Field
                  id="treatment"
                  label="Treatment required"
                  required
                  error={errors.treatment}
                  className="sm:col-span-2"
                >
                  <select
                    id="treatment"
                    name="treatment"
                    value={values.treatment}
                    onChange={onChange}
                    className={`${fieldClass} ${border('treatment')}`}
                    {...aria('treatment')}
                  >
                    <option value="">Select a treatment</option>
                    {treatmentOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="message" label="Message (optional)" error={errors.message} className="sm:col-span-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={500}
                    placeholder="Tell us briefly about your concern"
                    value={values.message}
                    onChange={onChange}
                    className={`${fieldClass} ${border('message')} resize-none`}
                    {...aria('message')}
                  />
                </Field>
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary mt-6 w-full sm:w-auto"
              >
                <FaWhatsapp className="h-4.5 w-4.5" aria-hidden="true" />
                Send Request via WhatsApp
                <Send className="h-4 w-4" aria-hidden="true" />
              </motion.button>

              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                This sends an appointment request only. Your appointment is not confirmed until our team
                replies with a time slot.
              </p>

              <div aria-live="polite">
                {sentLink && (
                  <p className="mt-4 rounded-xl bg-mint-light p-4 text-sm text-primary-dark">
                    WhatsApp should have opened with your request. Please press Send there to deliver it. If
                    nothing opened,{' '}
                    <a
                      href={sentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline underline-offset-2"
                    >
                      tap here to open WhatsApp
                    </a>
                    .
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
