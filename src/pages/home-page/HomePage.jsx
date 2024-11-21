import React from 'react'
import BannerPage from './BannerPage'
import AboutPage from './AboutPage'
import ServiceArea from './ServiceArea'
import ContactInfo from './ContactPage'

const HomePage = () => {
  return (
    <div>
        <BannerPage></BannerPage>
        {/* <AboutPage></AboutPage> */}
        <ServiceArea></ServiceArea>
        <ContactInfo></ContactInfo>
    </div>
  )
}

export default HomePage
