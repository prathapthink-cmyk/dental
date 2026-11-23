import About from '../components/About'
import AppointmentCTA from '../components/AppointmentCTA'
import BackToTop from '../components/BackToTop'
import Contact from '../components/Contact'
import Doctors from '../components/Doctors'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-primary-dark focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <Doctors />
        <Testimonials />
        <Gallery />
        <AppointmentCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}
