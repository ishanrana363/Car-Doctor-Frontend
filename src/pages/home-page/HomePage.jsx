import React from 'react'
import BannerPage from './BannerPage'
import AboutPage from './AboutPage'
import ServiceArea from './ServiceArea'
import ContactInfo from './ContactPage'
import Product from './Product'
import Team from './Team'

const HomePage = () => {
  return (
    <div>
        <BannerPage></BannerPage>
        {/* <AboutPage></AboutPage> */}
        <ServiceArea></ServiceArea>
        <ContactInfo></ContactInfo>
        <Product></Product>
        <Team></Team>
    </div>
  )
}

export default HomePage
