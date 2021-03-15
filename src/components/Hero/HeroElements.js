import styled from 'styled-components'
import ImgBg from '../../images/cinema.jpg'


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
    font-size:clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    margin-left:296px;

    margin-top:-360px;
    letter-spacing:3px;


    @media screen and (max-width: 768px) { 
        margin-top:-220px;
        margin-left:56px;
    }
`

export const HeroP = styled.p`
    font-size:clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
    @media screen and (max-width: 768px) {
        margin-left:-16px;
        font-size:24px;
        margin-top:24px;
    }
`

export const HeroBtn = styled.button`
    font-size:1.4rem;
    padding:1rem 2rem;
    border:none;
    background: #e31837;
    color:#fff;
    transition: 0.2s ease-out;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:left;
    border-radius:32px;

    &:hover{
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor:pointer;
    }
    @media screen and (max-width: 768px) {

        p{
            margin-top:-10px;
        }
        margin-left:-16px;
        height:48px;
        
    }
`;