import Navbar from '@/components/layout/Navbar'
import Hero from './components/Hero'
import ContactDetail from './components/ContactDetail'
import Footer3 from '@/components/common/Footer3'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
}

const Contact = () => {
  return (
    <>
      <div className="header-7 bg-gradient2">
        <Navbar centered buttonVariant="outline-secondary" />
        <Hero />
      </div>
      <ContactDetail />
      <Footer3 />
    </>
  )
}
export default Contact
