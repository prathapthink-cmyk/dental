import { whatsappUrl, clinic } from '../data/clinicData'
import type { AppointmentForm } from './validation'

const formatDate = (iso: string): string => {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** Builds a pre-filled WhatsApp link for an appointment request. */
export function buildAppointmentLink(form: AppointmentForm): string {
  const lines: string[] = [
    `Hello ${clinic.fullName}, I would like to request an appointment.`,
    '',
    `*Name:* ${form.name.trim()}`,
    `*Phone:* ${form.phone.trim()}`,
  ]
  if (form.email.trim()) lines.push(`*Email:* ${form.email.trim()}`)
  lines.push(`*Preferred date:* ${formatDate(form.date)}`, `*Treatment:* ${form.treatment}`)
  if (form.message.trim()) lines.push(`*Message:* ${form.message.trim()}`)

  return whatsappUrl(lines.join('\n'))
}
