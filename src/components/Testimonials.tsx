import { Star } from 'lucide-react'
import { type Testimonial, testimonials } from '../data/testimonials'
import Carousel from './ui/Carousel'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-cream/50 p-6 shadow-card transition-shadow duration-300 hover:shadow-soft">
      <div className="flex items-center gap-4">
        <img
          src={t.avatar}
          alt={`Portrait of ${t.name}`}
          width={160}
          height={160}
          loading="lazy"
          decoding="async"
          className="h-14 w-14 rounded-full object-cover ring-2 ring-mint"
        />
        <div>
          <figcaption className="font-bold text-ink">{t.name}</figcaption>
          <div className="mt-1 flex gap-0.5" role="img" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, n) => (
              <Star
                key={n}
                aria-hidden="true"
                className={`h-4 w-4 ${n < t.rating ? 'fill-amber-400 text-amber-400' : 'text-line'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-muted">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <SectionHeading
          id="testimonials-heading"
          title="What Our Patients Say"
          subtitle="Real smiles, real stories from our happy patients."
        />

        <Carousel
          className="mt-10 lg:hidden"
          label="Patient testimonials carousel"
          slideLabels={testimonials.map((t) => t.name)}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </Carousel>

        <ul className="mt-12 hidden gap-5 lg:grid lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.id}>
              <Reveal delay={i * 0.1} className="h-full">
                <TestimonialCard t={t} />
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs text-muted">
          Sample testimonials shown as placeholder content.
        </p>
      </div>
    </section>
  )
}
