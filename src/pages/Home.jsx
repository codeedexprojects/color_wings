import React from 'react'
import Header from '../components/common/Header'
import BusinessCardShowcase from '../components/home/HeroSection'
import AboutUs from '../components/home/AboutUs'
import ServicesSection from '../components/home/OurServices'
import PrintEssentialsSlider from '../components/home/TextSlider'
import BusinessCardsSection from '../components/home/BusinessCrads'
import PrintEssentialsSlider2 from '../components/home/TextSlider2'
import GiftsCardsSection from '../components/home/GiftsSection'
import PrintEssentialsSlider3 from '../components/home/TextSlider3'
import PrintCardsSection from '../components/home/PrintingSection'
import PrintEssentialsSlider4 from '../components/home/TextSlider4'
import PackageCardsSection from '../components/home/PackageSection'
import PrintEssentialsSlider5 from '../components/home/TextSlider5'
import AdvertisingCardsSection from '../components/home/AdvertisingSection'
import PrintEssentialsSlider6 from '../components/home/TextSlider6'
import VisualCardsSection from '../components/home/VisualCards'
import PrintEssentialsSlider7 from '../components/home/TextSlider7'
import CrystalCardsSection from '../components/home/CrystelCard'
import PrintEssentialsSlider8 from '../components/home/TextSlider8'
import PUCustomeCardsSection from '../components/home/PUCustomSection'
import OurClientsSection from '../components/home/OurClients'
import ClientSlider from '../components/home/ClientsSlider'
import Footer from '../components/common/Footer'
import ExpoSlider9 from '../components/home/TextSlider9'
import ExpoCardsSection from '../components/home/ExpoSection'
import { FaWhatsapp } from 'react-icons/fa'

function Home() {
  return (
    <div>
      <Header></Header>
      <section id="home"><BusinessCardShowcase></BusinessCardShowcase></section>
      <section id="about"> <AboutUs /> </section>
      <section id='services'><ServicesSection></ServicesSection></section>
      <section id='products'><PrintEssentialsSlider></PrintEssentialsSlider></section>
      <section id='products'><BusinessCardsSection></BusinessCardsSection></section>
      <section id='products'><PrintEssentialsSlider2></PrintEssentialsSlider2></section>
      <section id='products'><GiftsCardsSection></GiftsCardsSection></section>
      <section id='products'><PrintEssentialsSlider3></PrintEssentialsSlider3></section>
      <section id='products'><PrintCardsSection></PrintCardsSection></section>
      <section id='products'><PrintEssentialsSlider4></PrintEssentialsSlider4></section>
      <section id='products'><PackageCardsSection></PackageCardsSection></section>
      <section id='products'><PrintEssentialsSlider5></PrintEssentialsSlider5></section>
      <section id='products'><AdvertisingCardsSection></AdvertisingCardsSection></section>
      <section id='products'><PrintEssentialsSlider6></PrintEssentialsSlider6></section>
      <section id='products'><VisualCardsSection></VisualCardsSection></section>
      <section id='products'><PrintEssentialsSlider7></PrintEssentialsSlider7></section>
      <section id='products'><CrystalCardsSection></CrystalCardsSection></section>
      <section id='products'><PrintEssentialsSlider8></PrintEssentialsSlider8></section>
      <section id='products'><PUCustomeCardsSection></PUCustomeCardsSection></section>
      <section id='products'><ExpoSlider9></ExpoSlider9></section>
      <section id='products'><ExpoCardsSection></ExpoCardsSection></section>

      <section id='clients'><OurClientsSection></OurClientsSection></section>
      <section id='clients'><ClientSlider></ClientSlider></section>
      <section id='contact'><Footer></Footer></section>
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/971509374377" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
          style={{ width: '60px', height: '60px' }}
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
      </div>
    </div>
  )
}

export default Home