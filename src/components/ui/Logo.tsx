import { clinic } from '../../data/clinicData'
import ToothIcon from './ToothIcon'

interface LogoProps {
  /** Use light text for dark backgrounds. */
  light?: boolean
  href?: string
}

export default function Logo({ light = false, href = '#home' }: LogoProps) {
  return (
    <a
      href={href}
      className="flex min-w-0 shrink items-center gap-1 sm:gap-1.5"
      aria-label={`${clinic.fullName} home`}
    >
      <ToothIcon
        className={`h-12 w-12 shrink-0 sm:h-14 sm:w-14 ${light ? 'text-mint' : 'text-primary'}`}
        strokeWidth={3}
      />
      <span className="whitespace-nowrap text-xl font-extrabold tracking-tight sm:text-2xl">
        <span className={light ? 'text-white' : 'text-primary-dark'}>{clinic.logo.first}</span>
        {' '}
        <span className={light ? 'text-mint' : 'text-primary'}>{clinic.logo.second}</span>
      </span>
    </a>
  )
}
