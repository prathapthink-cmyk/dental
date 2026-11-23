import reception from '../assets/images/gallery-reception.webp'
import room from '../assets/images/gallery-treatment-room.webp'
import equipment from '../assets/images/gallery-equipment.webp'
import interior from '../assets/images/gallery-interior.webp'
import consultation from '../assets/images/gallery-consultation.webp'
import technology from '../assets/images/gallery-technology.webp'

export interface GalleryItem {
  id: string
  caption: string
  image: string
  alt: string
}

export const galleryItems: GalleryItem[] = [
  { id: 'reception', caption: 'Reception Area', image: reception, alt: 'Bright and welcoming dental clinic reception area with a front desk and seating' },
  { id: 'room', caption: 'Treatment Room', image: room, alt: 'Modern dental treatment room with a green dental chair and overhead light' },
  { id: 'equipment', caption: 'Dental Equipment', image: equipment, alt: 'Sterilised dental instruments neatly arranged on a clean tray' },
  { id: 'interior', caption: 'Clinic Interior', image: interior, alt: 'Calm clinic interior with warm wood, plants and soft natural light' },
  { id: 'consultation', caption: 'Dentist Consultation', image: consultation, alt: 'Dentist discussing a treatment plan with a patient during a consultation' },
  { id: 'technology', caption: 'Modern Dental Technology', image: technology, alt: 'Digital dental x-ray displayed on a monitor in the clinic' },
]
