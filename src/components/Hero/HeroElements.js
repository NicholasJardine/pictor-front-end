import styled from 'styled-components'
import ImgBg from '../../images/cinema.jpg'
import {Link} from 'react-scroll'


export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.1)), url(${ImgBg});
    height:100vh;
    background-position:center;
    background-size:cover;
    

`;

export const HeroContent = styled.div`
    height: calc(100vh - 80px);
    max-height:100%;
    width:100vw;
    padding: 0rem calc((100vw - 1300px)/ 2);
`;

export const HeroItems = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    height:100vh;
    max-height:100%;
    padding: 0 2rem;
    width:75%;
    color:#fff;
    text-transformation:uppercase;
    line-height:1;
    font-weight:bold;
    position:relative;
    margin:0 auto;
    text-align:center;
    @media screen and (max-width: 650px) {
        width:100%;
    }
`;

export const HeroH1 = styled.h1`
    font-size:clamp(2.5rem, 10vw, 4rem);
    margin-bottom: 2rem;
    margin-left:340px;

    margin-top:-360px;
    letter-spacing:3px;


    @media screen and (max-width: 768px) { 
        margin-top:-220px;
        margin-left:56px;
        margin-bottom: 1rem;

    }
`

export const HeroP = styled.p`
    font-size:clamp(2rem, 2.5vw, 2.5rem);
    margin-bottom: 2rem;
    @media screen and (max-width: 768px) {
        margin-left:-16px;
        font-size:24px;
        margin-top:24px;
    }
`


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
`;
