import React, {useState} from 'react'
import Navbar from '../Navbar'
// import Sidebar from '../Sidebar.js'
import {HeroContainer, HeroContent, HeroBtn, HeroItems,HeroP,HeroH1} from './HeroElements'


const Hero = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen)
    }
    return (
        <HeroContainer>
            {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
            <HeroContent>
                <HeroItems>
                <HeroH1>Pictor</HeroH1>
                    <HeroP>The best platform for online auditions for actors and casting agents/production companies.</HeroP>
                    {/* <HeroBtn><p>Place Order</p></HeroBtn> */}
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
