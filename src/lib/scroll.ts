/** Smoothly scrolls to a section by hash (e.g. "#contact") and updates the URL. */
export function scrollToHash(hash: string): void {
  const target = document.getElementById(hash.replace(/^#/, ''))
  if (!target) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  history.replaceState(null, '', hash)
}
