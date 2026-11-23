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
      className="flex min-w-0 shrink items-center gap-2 sm:gap-2.5"
      aria-label={`${clinic.fullName} home`}
    >
      <ToothIcon className={`h-8 w-8 shrink-0 sm:h-9 sm:w-9 ${light ? 'text-mint' : 'text-primary'}`} />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`whitespace-nowrap text-[15px] font-extrabold tracking-tight sm:text-xl ${
            light ? 'text-white' : 'text-ink'
          }`}
        >
          {clinic.name}
        </span>
        <span className={`mt-1 text-[10px] font-medium sm:text-[11px] ${light ? 'text-mint/80' : 'text-muted'}`}>
          {clinic.subtitle}
        </span>
      </span>
    </a>
  )
}
