import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import AddressSection from '../../components/addressSection'
import SmallFooter from '../../components/smallFooter'
import Footer from '../../components/footerSection'
import Hero from './components/Hero'
import Contact from './components/Contact'
export default function index() {

    return (

        <div>
            <Navbar />
            <Hero />
            <Contact />
            <AddressSection />
            <SmallFooter />
            <Footer />
        </div>
    )
}
