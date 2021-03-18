import React, { useState, useRef, useEffect } from 'react'
import { FaSlideshare } from 'react-icons/fa'
import styled from 'styled-components'
import { Button } from './Button'
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'
const HeroSection = styled.section`
    height:70vh;
    max-height: 660px;
    // position:relative;
    overflow:hidden;
    // margin:0 auto;
    background:#010606;
    padding-bottom:40px;
    z-index:-1;
    
`
const HeroWrapper = styled.div`
    width:50%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    position:relative;
    margin:0 auto;
    // box-shadow: #fff 0px 5px 15px;
    border-radius:8px;
    margin-bottom:60px;
`;

const HeroSlide = styled.div`
    z-index:1;
    width:100%;
    height:100%;
`
const Industry = styled.div`
    z-index:1;
    width:100%;
    height:auto;
    background:#010606;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#fff;
    h1{
        font-size:3rem;
        font-weight:700;
        text-transform:uppercase;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        text-align:left;
        margin-bottom:56px;
        margin-top:56px;
    }
 
`

const HeroSlider = styled.div`
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`
const HeroImage = styled.img`
flex-shrink: 0;
min-width: 100%;
min-height: 100%;
`
const HeroContent = styled.div`

   position:relative;
   z-index:-10;
   display:flex;
   flex-direction:column;
   max-width:1600px;
   width: calc(100%-100px);
   color:#fff;
   padding-left:40px;
   h1{
       position:absolute;
       fontsize: clamp(1rem, 8vw, 2rem);
       font-weight:400;
       text-transform:uppercase;
       text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
       text-align:left;
       margin-bottom:0.8rem;
       top: -140px;
       left: -50px;  }

   @media screen and (max-width:768px){

    h1{
        margin-top:auto;
    }
   }
    
   p{
       margin-bottom:1.2rem;
       text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
   }
`

const HeroTitleWrapper = styled.div`
position:relative;
margin:0
z-index:1;
width:100%;
height:auto;
background:    background:#101522;
display:flex;
justify-content:center;
align-items:center;
color:#fff;
h1{
    position:relative;
    font-size:2rem;
    font-weight:400;
    text-transform:uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align:center;
    margin-bottom:56px;

}

`;
const Arrow = styled(IoMdArrowRoundForward)`
margin-left:0.5rem;      
`
const PrevArrow = styled(IoArrowBack)`
width:50px;
height:50px;
color:#fff;
cursor:pointer;
background:#000d1a;
border-radius:50px;
padding:10px;
margin-right: 1rem;
user-select:none;
transition: 0.3s;

&:hover{
   background:#cd853f;
   transform: scale(1.05); 
}   
`
const NextArrow = styled(IoArrowForward)`
width:50px;
height:50px;
color:#fff;
cursor:pointer;
background:#000d1a;
border-radius:50px;
padding:10px;
margin-right: 1rem;
user-select:none;
transition: 0.3s;

&:hover{
   background:#cd853f;
   transform: scale(1.05); 
}  
`


const SliderButtons = styled.div`
    position:absolute;
    bottom:50px;
    right: 50px;
    display:flex;
    z-index:1;
`
const Hero = ({slides}) => {
    const[current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(
        () => {
        const nextSlide = () => {
           setCurrent(current => (current === length - 1 ? 0 : current + 1));
        };

        // timeout.current = setTimeout(nextSlide, 3000);

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
     },
     [current, length]
    );

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        console.log(current);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        console.log(current);
    }; 
    return (
        <>
                    <Industry id="latest">
                        
                        <h1>Industry News</h1>
                        {slides.map((slide, index) => {
                    return(
                        <>
                        
                        <HeroSlide key={index}>
                            {index === current && (

                                
                                    
<HeroTitleWrapper><h1>{slide.title}</h1></HeroTitleWrapper>

                                
                           



                        

                            )}

                        </HeroSlide>

                        <HeroSlide key={index}>
                            {index === current && (

                                
                                    
                            <HeroSlider>

                                
                        
                        </HeroSlider>

                            )}

                        </HeroSlide>
                        </>
                    );
                })}
                        
                        </Industry>

        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return(
                        <>
                        
                        <HeroSlide key={index}>
                            {index === current && (

                                
                                    
                            <HeroSlider>

                                
                            <HeroImage src={slide.image} alt={slide.alt} />



                            {/* <HeroContent> */}
                        {/* <h1>{slide.title}</h1> */}
{/*                         
                        <Button to ={slide.path} primary='true' css={`max-width:160px;`}>
                            {slide.label}
                            <Arrow />
                        </Button> */}
                    {/* </HeroContent> */}
                        
                        </HeroSlider>

                            )}

                        </HeroSlide>

                        <HeroSlide key={index}>
                            {index === current && (

                                
                                    
                            <HeroSlider>
{/* <HeroTitleWrapper><h1>{slide.title}</h1></HeroTitleWrapper> */}

                                
                        
                        </HeroSlider>

                            )}

                        </HeroSlide>
                        </>
                    );
                })}

                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
        </>
    )
}

export default Hero
