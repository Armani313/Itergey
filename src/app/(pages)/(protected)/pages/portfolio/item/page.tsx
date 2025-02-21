import Navbar from '@/components/layout/Navbar'
import Hero from './components/Hero'
import Content from './components/Content'
import Testimonial from './components/Testimonial'
import Footer from '@/components/common/Footer'
import Navigation from './components/Navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Items',
}

const PortfolioItem = () => {
  return (
    <>
      <Navbar buttonVariant="outline-secondary" />
      <Hero />
      <Content />
      <Testimonial />
      <Navigation />
      <Footer />
    </>
  )
}
export default PortfolioItem
