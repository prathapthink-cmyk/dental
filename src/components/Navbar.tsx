import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, Menu, Phone, X } from 'lucide-react'
import { type MouseEvent, useEffect, useRef, useState } from 'react'
import { clinic, navLinks } from '../data/clinicData'
import { scrollToHash } from '../lib/scroll'
import Button from './ui/Button'
import Logo from './ui/Logo'

const sectionIds = navLinks.map((l) => l.href.slice(1))

function useActiveSection(): string {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      // Section whose top has passed ~35% of the viewport is "current".
      const probe = window.scrollY + window.innerHeight * 0.35
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= probe) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /**
   * The sticky header takes up layout space while the mobile menu is open, so
   * scroll only after the menu has finished collapsing (see onExitComplete).
   */
  const pendingHash = useRef<string | null>(null)
  const goTo = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault()
    if (open) {
      pendingHash.current = hash
      setOpen(false)
    } else {
      scrollToHash(hash)
    }
  }
  const onMenuClosed = () => {
    if (pendingHash.current) {
      scrollToHash(pendingHash.current)
      pendingHash.current = null
    }
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-white/90 shadow-card backdrop-blur-md'
          : 'border-b border-transparent bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-3 sm:gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative py-2 text-sm font-semibold transition-colors ${
                      isActive ? 'text-primary-dark' : 'text-ink/80 hover:text-primary'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-primary"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${clinic.phone.tel}`}
            className="flex items-center gap-2 rounded-full bg-mint-light px-4 py-2.5 text-sm font-semibold text-primary-dark transition-colors hover:bg-mint"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {clinic.phone.display}
          </a>
          <Button href="#name" icon={<CalendarDays className="h-4 w-4" aria-hidden="true" />}>
            Book Appointment
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact"
            className="btn-primary shrink-0 px-3 py-2.5 text-xs sm:px-4 sm:text-sm"
            onClick={(e) => goTo(e, '#name')}
          >
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Book Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-mint-light"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence onExitComplete={onMenuClosed}>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <nav aria-label="Mobile" className="container-page py-4">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => goTo(e, link.href)}
                      className={`block rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
                        active === link.href.slice(1)
                          ? 'bg-mint-light text-primary-dark'
                          : 'text-ink hover:bg-mint-light'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-col gap-3">
                <a
                  href={`tel:${clinic.phone.tel}`}
                  className="btn-outline w-full"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {clinic.phone.display}
                </a>
                <a href="#name" className="btn-primary w-full" onClick={(e) => goTo(e, '#name')}>
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  Book Appointment
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
