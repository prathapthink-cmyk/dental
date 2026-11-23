import Reveal from './Reveal'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  id?: string
}

export default function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <div className="flex items-center justify-center gap-4">
        <span aria-hidden="true" className="hidden h-0.5 w-8 rounded-full bg-primary/60 sm:block" />
        <h2 id={id} className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <span aria-hidden="true" className="hidden h-0.5 w-8 rounded-full bg-primary/60 sm:block" />
      </div>
      {subtitle && <p className="mt-3 text-sm text-muted sm:text-base">{subtitle}</p>}
    </Reveal>
  )
}
