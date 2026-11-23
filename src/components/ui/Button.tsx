import { motion } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'
import { scrollToHash } from '../../lib/scroll'

type Variant = 'primary' | 'outline' | 'light'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: Variant
  icon?: ReactNode
  trailingIcon?: ReactNode
  /** Opens in a new tab (for WhatsApp, maps, etc). */
  external?: boolean
  className?: string
  onClick?: () => void
}

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  light: 'btn bg-white text-primary-dark shadow-soft hover:bg-mint-light',
}

export default function Button({
  href,
  children,
  variant = 'primary',
  icon,
  trailingIcon,
  external = false,
  className = '',
  onClick,
}: ButtonProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!external && href.startsWith('#')) {
      e.preventDefault()
      scrollToHash(href)
    }
    onClick?.()
  }

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={`${variants[variant]} ${className}`}
    >
      {icon}
      {children}
      {trailingIcon}
    </motion.a>
  )
}
