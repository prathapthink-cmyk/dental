import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa6'
import { whatsappUrl } from '../data/clinicData'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift sm:right-6 sm:bottom-6"
    >
      <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.5s]" />
      <FaWhatsapp className="relative h-7 w-7" aria-hidden="true" />
    </motion.a>
  )
}
