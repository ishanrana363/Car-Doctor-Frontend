import React from 'react'
import BannerPage from './BannerPage'
import AboutPage from './AboutPage'
import ServiceArea from './ServiceArea'
import ContactInfo from './ContactPage'
import Product from './Product'
import Team from './Team'
import WhyChooseUs from './WhyChooseUs'

const HomePage = () => {
  return (
    <div>
        <BannerPage></BannerPage>
        {/* <AboutPage></AboutPage> */}
        <ServiceArea></ServiceArea>
        <ContactInfo></ContactInfo>
        <Product></Product>
        <Team></Team>
        <WhyChooseUs></WhyChooseUs>
    </div>
  )
}

export default HomePage
