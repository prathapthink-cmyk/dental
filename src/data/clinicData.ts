/**
 * Central, editable clinic configuration.
 * All sample values below should be replaced with the real clinic details.
 */
export const clinic = {
  /** Displayed in the logo (first word = dark green, second = primary green). */
  name: 'Dental Clinic',
  logo: {
    first: 'Dental',
    second: 'Clinic',
  },
  subtitle: '',
  fullName: 'Dental Clinic',
  tagline: 'Healthy Smile, Happier You',
  description:
    'Dental Clinic offers complete family dental care - cleaning, fillings, root canals, implants, braces and teeth whitening - with modern technology and a gentle approach.',
  /** Production URL (used for canonical, Open Graph and structured data). */
  siteUrl: 'https://nagercoil-dental.pages.dev',
  phone: {
    display: '+91 99948 50450',
    /** Digits only with country code, used for tel: links. */
    tel: '+919994850450',
  },
  /** WhatsApp number: country code + number, digits only, no "+" sign. */
  whatsappNumber: '919994850450',
  whatsappGreeting: 'Hello Dental Clinic, I would like to book an appointment.',
  email: 'hello@nagercoildental.example',
  address: {
    street: '42, Court Road, Vadasery',
    city: 'Nagercoil',
    region: 'Tamil Nadu',
    postalCode: '629001',
    country: 'IN',
  },
  /** Sample pin near Court Road / Vadasery, Nagercoil — replace with the real clinic coords. */
  geo: { latitude: 8.1789, longitude: 77.4286 },
  hours: [
    { days: 'Monday - Friday', time: '9:00 AM - 8:00 PM' },
    { days: 'Saturday', time: '9:00 AM - 6:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  /** schema.org openingHoursSpecification, keep in sync with `hours`. */
  openingHoursSpec: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '20:00' },
    { dayOfWeek: ['Saturday'], opens: '09:00', closes: '18:00' },
  ],
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/',
    x: 'https://x.com/',
  },
  /**
   * Google Maps embed for Court Road, Vadasery, Nagercoil.
   * Replace with Share > Embed a map from Google Maps when you have the exact clinic pin.
   */
  mapEmbedUrl:
    'https://maps.google.com/maps?q=42+Court+Road+Vadasery+Nagercoil&hl=en&z=16&output=embed',
  mapSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=42+Court+Road+Vadasery+Nagercoil+629001',
} as const

export const formattedAddress = [
  clinic.address.street,
  `${clinic.address.city}, ${clinic.address.region} ${clinic.address.postalCode}`,
].join(', ')

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const

export const whatsappUrl = (message: string = clinic.whatsappGreeting) =>
  `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`
