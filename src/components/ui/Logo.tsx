import { clinic } from '../../data/clinicData'
import ToothIcon from './ToothIcon'

interface LogoProps {
  /** Use light text for dark backgrounds. */
  light?: boolean
  href?: string
}

export default function Logo({ light = false, href = '#home' }: LogoProps) {
  return (
    <a href={href} className="flex items-center gap-2.5" aria-label={`${clinic.fullName} home`}>
      <ToothIcon className={`h-9 w-9 ${light ? 'text-mint' : 'text-primary'}`} />
      <span className="flex flex-col leading-none">
        <span className={`text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
          {clinic.name}
        </span>
        <span className={`mt-1 text-[11px] font-medium ${light ? 'text-mint/80' : 'text-muted'}`}>
          {clinic.subtitle}
        </span>
      </span>
    </a>
  )
}
