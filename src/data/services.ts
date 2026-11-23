import {
  Baby,
  Gem,
  type LucideIcon,
  Smile,
  SmilePlus,
  Sparkles,
  Stethoscope,
  Syringe,
  Waypoints,
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  { id: 'cleaning', title: 'Teeth Cleaning & Polishing', description: 'Professional scaling for fresh, healthy gums.', icon: Sparkles },
  { id: 'cavity', title: 'Cavity Treatment', description: 'Gentle fillings that restore your tooth.', icon: Stethoscope },
  { id: 'root-canal', title: 'Root Canal Treatment', description: 'Comfortable, pain-free root canal therapy.', icon: Syringe },
  { id: 'implants', title: 'Dental Implants', description: 'Natural-looking, long-lasting replacements.', icon: Gem },
  { id: 'braces', title: 'Braces & Aligners', description: 'Straighter teeth with metal or clear options.', icon: Waypoints },
  { id: 'whitening', title: 'Teeth Whitening', description: 'Safe whitening for a brighter smile.', icon: SmilePlus },
  { id: 'extraction', title: 'Tooth Extraction', description: 'Careful, minimally invasive removal.', icon: Smile },
  { id: 'kids', title: 'Kids Dental Care', description: 'Friendly, fear-free care for children.', icon: Baby },
]

/** Treatment options shown in the contact form dropdown. */
export const treatmentOptions = [...services.map((s) => s.title), 'General Check-up', 'Other']
