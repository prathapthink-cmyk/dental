import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Children, type ReactNode, useCallback, useEffect, useRef, useState } from 'react'

interface CarouselProps {
  /** Accessible name for the track. */
  label: string
  /** Labels used by the dot buttons (one per slide). */
  slideLabels: string[]
  children: ReactNode
  /**
   * Tailwind width classes for each slide.
   * Mobile default peeks the next card; sm shows ~2 cards.
   */
  slideClassName?: string
  className?: string
}

/** Horizontal snap carousel for mobile / tablet. Pair with a `hidden lg:grid` layout for desktop. */
export default function Carousel({
  label,
  slideLabels,
  children,
  slideClassName = 'w-[82%] sm:w-[calc(50%-0.5rem)]',
  className = '',
}: CarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [active, setActive] = useState(0)
  const slides = Children.toArray(children)
  const count = slides.length

  const updateActive = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const first = track.children[0] as HTMLElement | undefined
    if (!first) return
    const step = first.offsetWidth + 16 // gap-4
    const index = Math.round(track.scrollLeft / step)
    setActive(Math.max(0, Math.min(index, count - 1)))
  }, [count])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    updateActive()
    track.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      track.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [updateActive])

  const scrollTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const first = track.children[0] as HTMLElement | undefined
    if (!first) return
    const step = first.offsetWidth + 16
    track.scrollTo({ left: step * index, behavior: 'smooth' })
  }

  return (
    <div className={`relative ${className}`}>
      <ul
        ref={trackRef}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8"
        aria-label={label}
      >
        {slides.map((slide, i) => (
          <li key={slideLabels[i] ?? i} className={`shrink-0 snap-center ${slideClassName}`}>
            {slide}
          </li>
        ))}
      </ul>

      {count > 1 && (
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            disabled={active === 0}
            onClick={() => scrollTo(active - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-primary-dark shadow-card transition-colors hover:bg-mint disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label={`${label} slides`}>
            {slideLabels.map((name, i) => (
              <button
                key={name}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-label={`Show ${name}`}
                onClick={() => scrollTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  active === i ? 'w-7 bg-primary' : 'w-2.5 bg-primary/25 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next"
            disabled={active === count - 1}
            onClick={() => scrollTo(active + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-primary-dark shadow-card transition-colors hover:bg-mint disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  )
}
