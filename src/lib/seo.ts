import { clinic } from '../data/clinicData.ts'

/**
 * SEO helpers. These are evaluated at build time by the Vite plugin in
 * vite.config.ts and written into index.html, so crawlers and link previews
 * see the values without running JavaScript. Edit clinic details in
 * src/data/clinicData.ts only.
 */
export const seo = {
  title: `${clinic.fullName} | Family Dentist in ${clinic.address.city}`,
  description: `${clinic.fullName} in ${clinic.address.city}: teeth cleaning, root canal, implants, braces, whitening and kids dental care with modern technology and a gentle approach. Book your appointment today.`,
  url: clinic.siteUrl,
  image: `${clinic.siteUrl}/og-image.jpg`,
}

export function buildStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${clinic.siteUrl}/#dentist`,
    name: clinic.fullName,
    description: clinic.description,
    url: clinic.siteUrl,
    image: seo.image,
    logo: `${clinic.siteUrl}/favicon.svg`,
    telephone: clinic.phone.tel,
    email: clinic.email,
    medicalSpecialty: 'Dentistry',
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinic.address.street,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.region,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.country,
    },
    hasMap: clinic.mapSearchUrl,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: clinic.geo.latitude,
      longitude: clinic.geo.longitude,
    },
    openingHoursSpecification: clinic.openingHoursSpec.map((spec) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes,
    })),
    sameAs: Object.values(clinic.social),
    areaServed: clinic.address.city,
    slogan: clinic.tagline,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: clinic.phone.tel,
      contactType: 'appointments',
      areaServed: clinic.address.country,
      availableLanguage: ['English', 'Tamil', 'Hindi'],
    },
  }
}
