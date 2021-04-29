import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu,NavLinks, NavBtn, NavBtnLink, NavLogoImage, OpenIcon, NavBtnLinkTwo} from './NavbarElements';
import {IconContext} from 'react-icons/lib'
import picone from '../../images/logo.png';

import {animateScroll as scroll} from 'react-scroll';
const Navbar = ({toggle}) => {
    // const [scrollNav, setScrollNav] = useState(false)

    // const changeNav = () => {
    //  if(window.scrollY >= 80) {
    //     setScrollNav(false);
    //  }else{
    //      setScrollNav(true);
    //  }
    // };

    // useEffect(() => {
    //    window.addEventListener('scroll', changeNav);
    // }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
<> 
<IconContext.Provider value={{color:'#CCA459'
}}>
    <Nav>
       <NavbarContainer>

           <NavLogo to="/" onClick={toggleHome}>
             <NavLogoImage src ={picone}/>
           </NavLogo>
            <MobileIcon onClick={toggle}>
                <OpenIcon></OpenIcon>
            </MobileIcon>
            <NavMenu>
            <NavItem>
                   <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset= {-80}>About</NavLinks> 
                </NavItem>
                <NavItem>
                   <NavLinks to='discover'  smooth={true} duration={500} spy={true} exact='true' offset= {-80}>Discover</NavLinks> 
                </NavItem>
                <NavItem>
                   <NavLinks to='latest'  smooth={true} duration={500} spy={true} exact='true' offset= {-80}>News</NavLinks> 
                </NavItem>
                
                <NavItem>
                   <NavBtnLinkTwo primary ={true} to='/search' >Search Actors </NavBtnLinkTwo> 
                </NavItem>
                <NavItem>
                <NavBtnLinkTwo primary={true} to="/users/new">Sign Up</NavBtnLinkTwo>                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink primary={true} to="/signin">Sign In</NavBtnLink>
            </NavBtn>


       </NavbarContainer>
        
    </Nav>
    </IconContext.Provider>

</>
    )
}

export default Navbar
