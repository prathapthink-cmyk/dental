interface ToothIconProps {
  className?: string
  /** Fill colour for the tooth body (defaults to transparent). */
  fill?: string
  strokeWidth?: number
}

/** Brand tooth glyph (Lucide has no tooth icon), cropped tight to reduce logo gap. */
export default function ToothIcon({ className, fill = 'none', strokeWidth = 3.5 }: ToothIconProps) {
  return (
    <svg
      viewBox="16 10 32 48"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M32 14c-3-3-10-3-13 2-3 5-1 11 1 17 1 4 1 14 4 14 3 0 3-8 5-11 1-2 2-2 3-2s2 0 3 2c2 3 2 11 5 11 3 0 3-10 4-14 2-6 4-12 1-17-3-5-10-5-13-2z"
        fill={fill}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}
