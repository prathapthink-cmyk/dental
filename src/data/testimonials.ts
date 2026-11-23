import avatar1 from '../assets/images/avatar-1.webp'
import avatar2 from '../assets/images/avatar-2.webp'
import avatar3 from '../assets/images/avatar-3.webp'

export interface Testimonial {
  id: string
  name: string
  rating: number
  quote: string
  avatar: string
}

/** PLACEHOLDER testimonials - replace with real, consented patient reviews before launch. */
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Arun Kumar',
    rating: 5,
    quote: 'Very professional and friendly staff. The treatment was painless and the results are excellent!',
    avatar: avatar1,
  },
  {
    id: 't2',
    name: 'Divya S',
    rating: 5,
    quote: 'A clean and modern clinic with great care. I\u2019m very happy with my smile now!',
    avatar: avatar2,
  },
  {
    id: 't3',
    name: 'Raghul M',
    rating: 5,
    quote: 'Best dental clinic in the area. The doctor explained everything clearly and made me feel comfortable.',
    avatar: avatar3,
  },
]
