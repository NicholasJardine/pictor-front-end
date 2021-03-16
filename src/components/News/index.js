import React, { useState, useRef, useEffect }  from 'react'
import Hero from './Hero'
import Latest from './Latest'
import {NewsContainer, NewsWrapper, NewsRow, Heading, Column1, Column2, TextWrapper, Subtitle, BtnWrap, TopLine, ImgWrap, Img} from './NewsElements'
import {SliderData} from './SliderData'
const News = ({lightBg, img, id, imgStart, description, topLine, lightText, darkText, headline, buttonLabel, alt, primary, dark, dark2 }) => {



  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
        <>
                            <Hero slides={SliderData} isOpen={isOpen} toggle={toggle}/>
  
          <Latest></Latest>
        </>
    )
}

export default News
