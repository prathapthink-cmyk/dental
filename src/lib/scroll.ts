const FOCUSABLE = 'input, textarea, select, button, [tabindex]:not([tabindex="-1"])'

function focusTarget(el: HTMLElement): void {
  const focusable =
    el instanceof HTMLInputElement ||
    el instanceof HTMLTextAreaElement ||
    el instanceof HTMLSelectElement ||
    el instanceof HTMLButtonElement
      ? el
      : el.querySelector<HTMLElement>(FOCUSABLE)

  focusable?.focus({ preventScroll: true })
}

/** Smoothly scrolls to a section/field by hash (e.g. "#name") and focuses it when possible. */
export function scrollToHash(hash: string): void {
  const id = hash.replace(/^#/, '')
  const target = document.getElementById(id)
  if (!target) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' })
  history.replaceState(null, '', hash)

  if (reduce) {
    focusTarget(target)
  } else {
    // Wait for smooth scroll to settle before focusing the full-name field.
    window.setTimeout(() => focusTarget(target), 450)
  }
}
