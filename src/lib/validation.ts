export interface AppointmentForm {
  name: string
  phone: string
  email: string
  date: string
  treatment: string
  message: string
}

export type FormErrors = Partial<Record<keyof AppointmentForm, string>>

export const emptyForm: AppointmentForm = {
  name: '',
  phone: '',
  email: '',
  date: '',
  treatment: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Local date as YYYY-MM-DD (avoids UTC shifting the "today" boundary). */
export const todayISO = (): string => {
  const d = new Date()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${month}-${day}`
}

export function validateForm(values: AppointmentForm): FormErrors {
  const errors: FormErrors = {}

  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.'

  const digits = values.phone.replace(/\D/g, '')
  if (!/^[+\d\s()-]+$/.test(values.phone) || digits.length < 10 || digits.length > 13) {
    errors.phone = 'Enter a valid phone number (10-13 digits).'
  }

  // Email is optional, but must be valid if given.
  if (values.email.trim() && !emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.date) errors.date = 'Please choose a preferred date.'
  else if (values.date < todayISO()) errors.date = 'Date cannot be in the past.'

  if (!values.treatment) errors.treatment = 'Please select a treatment.'

  if (values.message.length > 500) errors.message = 'Message must be 500 characters or fewer.'

  return errors
}
