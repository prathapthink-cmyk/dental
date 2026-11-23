/**
 * Central, editable clinic configuration.
 * All sample values below should be replaced with the real clinic details.
 */
export const clinic = {
  name: 'SmileCare',
  subtitle: 'Dental Clinic',
  fullName: 'SmileCare Dental Clinic',
  tagline: 'Healthy Smile, Happier You',
  description:
    'SmileCare Dental Clinic offers complete family dental care - cleaning, fillings, root canals, implants, braces and teeth whitening - with modern technology and a gentle approach.',
  /** Production URL (used for canonical, Open Graph and structured data). */
  siteUrl: 'https://smilecare-dental.pages.dev',
  phone: {
    display: '+91 97890 12345',
    /** Digits only with country code, used for tel: links. */
    tel: '+919789012345',
  },
  /** WhatsApp number: country code + number, digits only, no "+" sign. */
  whatsappNumber: '919789012345',
  whatsappGreeting: 'Hello SmileCare Dental Clinic, I would like to book an appointment.',
  email: 'hello@smilecare.example',
  address: {
    street: '24, Green Park Road, Anna Nagar',
    city: 'Chennai',
    region: 'Tamil Nadu',
    postalCode: '600040',
    country: 'IN',
  },
  geo: { latitude: 13.0850, longitude: 80.2101 },
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
  /** Paste the "src" URL from Google Maps > Share > Embed a map. Leave empty to show a placeholder. */
  mapEmbedUrl: '' as string,
  mapSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Anna+Nagar+Chennai',
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
