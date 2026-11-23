import doctor1 from '../assets/images/doctor-1.webp'
import doctor2 from '../assets/images/doctor-2.webp'
import doctor3 from '../assets/images/doctor-3.webp'

export interface Doctor {
  id: string
  name: string
  qualification: string
  specialization: string
  description: string
  experience: string
  image: string
  imageAlt: string
}

/** Sample doctor profiles - replace with the real team. */
export const doctors: Doctor[] = [
  {
    id: 'priya-sharma',
    name: 'Dr. Priya Sharma',
    qualification: 'BDS, MDS (Conservative Dentistry)',
    specialization: 'Cosmetic & Restorative Dentist',
    description: 'Focuses on natural-looking restorations, whitening and complete smile makeovers.',
    experience: '12+ years',
    image: doctor1,
    imageAlt: 'Dr. Priya Sharma, cosmetic and restorative dentist, smiling in a white coat',
  },
  {
    id: 'arjun-mehta',
    name: 'Dr. Arjun Mehta',
    qualification: 'BDS, MDS (Endodontics)',
    specialization: 'Root Canal & Implant Specialist',
    description: 'Experienced in painless root canal therapy and implant-supported tooth replacement.',
    experience: '15+ years',
    image: doctor2,
    imageAlt: 'Dr. Arjun Mehta, endodontist and implant specialist, in clinic attire',
  },
  {
    id: 'sneha-iyer',
    name: 'Dr. Sneha Iyer',
    qualification: 'BDS, MDS (Pedodontics)',
    specialization: 'Pediatric & Orthodontic Dentist',
    description: 'Gentle care for children, plus braces and clear aligners for teens and adults.',
    experience: '9+ years',
    image: doctor3,
    imageAlt: 'Dr. Sneha Iyer, pediatric dentist and orthodontist, smiling warmly',
  },
]
