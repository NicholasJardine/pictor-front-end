import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
   /* opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')}; */

export const SidebarContainer = styled.aside`
    width:100%;
    height:100%;
    display:grid;
    align-items:center;
    z-index: 999;
    position:fixed;
    background: #0d0d0d;
    top:0;
    left:0;
    transition: 0.3s aease-in-and-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')}; 

`;

export const CloseIcon = styled(FaTimes)`
    color:#CCA459;
`;


export const Icon = styled.div`
    position:absolute;
    top:1.25rem;
    right: 1.5rem;
    background:transparent;
    font-size:2rem;
    cursor: pointer;
    outline: none;
    color:#CCA459;

`;

export const SidebarWrapper = styled.div`
    color:#fff;


`


export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
align-items: center;


@media screen and (max-width:768px) {
    grid-template-rows: repeat(6, 60px);
}

`

export const SidebarLink= styled(LinkS)`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:1.5rem;
    text-decoration: none;
    tansition: 0.2s ease-in-out;
    list-style: none;
    color:#fff;
    cursor: pointer;

    &:hover {
        color:#01bf71;
        tansition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`
export const SidebarRoute = styled(LinkR)`
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

outline:none;
display:flex;
jusify-conten:center;
align-items:center;
transition: all 0.2s ease-in-out;
cursor:pointer;
font-weight:700;
text-decoration:none;
&:hover{
    transition: all 0.2s ease-in-out;
    color:${({dark}) => (dark ? '#010606':'#fff')};
    background: ${({primary}) => (primary ? 'linear-gradient(90deg,#cf7500,#f4f4f4)' : '#010606')};

}
`
