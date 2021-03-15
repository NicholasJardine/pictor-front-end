import React, {useState} from 'react'
import Button from '../ButtonElement'
import Navbar from '../Navbar'
// import Sidebar from '../Sidebar.js'
import {HeroContainer, HeroContent, HeroItems,HeroP,HeroH1} from './HeroElements'
import styled from 'styled-components'
import {Link} from 'react-scroll'
const HeroButton = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'linear-gradient(90deg,#cf7500,#CCA459)' : 'linear-gradient(90deg,#cf7500,#CCA459)')
    };
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')
    };
    color: ${({dark}) => (dark ? '#010606' : ' #010606')
    };
    font-size: ${({fontBig}) => (fontBig ? '20px' : ' 16px')
    };
    margin-left: 380px;
    outline:none;
    display:flex;
    jusify-conten:center;
    align-items:center;
    transition: all 0.2s ease-in-out;
    cursor:pointer;
    font-weight:700;
    &:hover{
        transition: all 0.2s ease-in-out;
        color:${({dark}) => (dark ? '#010606':'#fff')};
        background: ${({primary}) => (primary ? 'linear-gradient(90deg,#cf7500,#f4f4f4)' : '#010606')};

    }

    @media screen and (max-width: 768px) { 
        margin-left:56px;
    }
`;
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
                    <HeroButton to='about' smooth={true} duration={500} spy={true} exact='true' offset= {-80}> Learn More</HeroButton>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
