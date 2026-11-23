import { Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { clinic, formattedAddress, navLinks } from '../data/clinicData'
import { services } from '../data/services'
import Logo from './ui/Logo'

const socials = [
  { label: 'Facebook', href: clinic.social.facebook, icon: FaFacebookF },
  { label: 'Instagram', href: clinic.social.instagram, icon: FaInstagram },
  { label: 'YouTube', href: clinic.social.youtube, icon: FaYoutube },
  { label: 'X (Twitter)', href: clinic.social.x, icon: FaXTwitter },
]

const currentYear = new Date().getFullYear()

const linkClass = 'text-sm text-white/75 transition-colors hover:text-white'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
            Complete family dental care with modern technology and a gentle approach.
          </p>
          <ul className="mt-5 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${clinic.name} on ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-primary-dark"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer quick links">
          <h2 className="text-sm font-bold tracking-wide uppercase">Quick Links</h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h2 className="text-sm font-bold tracking-wide uppercase">Our Services</h2>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.id}>
                <a href="#treatments" className={linkClass}>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold tracking-wide uppercase">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
              <span>{formattedAddress}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
              <a href={`tel:${clinic.phone.tel}`} className="hover:text-white">
                {clinic.phone.display}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
              <a href={`mailto:${clinic.email}`} className="break-all hover:text-white">
                {clinic.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-page py-5 text-center text-xs text-white/60">
          &copy; {currentYear} {clinic.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
