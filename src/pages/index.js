import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/hero'
import Products from '../components/products'
import Service from '../components/services'
import Testimony from '../components/testimony'

export default function Home() {
    const data = [
        {
            title : "Roadmap",
            img : "assets/image/logo.svg",
            desc: "Alur Beljar Terbaik"
        },
        {
            title : "Kelas Koding",
            img : "assets/image/logo.svg",
            desc: "Alur Beljar Terbaik"
        },
        {
            title : "Softskill",
            img : "assets/image/logo.svg",
            desc: "Alur Beljar Terbaik"
        },
        {
            title : "Lainya",
            img : "assets/image/logo.svg",
            desc: "Alur Beljar Terbaik"
        },
    ]
  return (
    <div>
        <Header />
        <Hero/>
        <Service data={data} />
        <Products/>
        <Testimony/>
        <Footer/>
    </div>
  )
}
