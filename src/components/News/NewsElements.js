import styled from 'styled-components'


export const NewsContainer = styled.div`
   color:#fff;
   background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')
    };

    @media screen and (max-width:768px) {
        padding:100px 0;
    }
`

export const NewsWrapper = styled.div`
    z-index: 1;
    height:600px;
    width:100%;
    // position:absolute;
    padding: 0 24px;
    display:grid;
    justify-content:center;
    margin-left:auto;
    margin-right:auto;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')
};`

export const NewsRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)
    };
    @media screen and (max-width:768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)
        };
    }
`


export const Column1 = styled.div`
    margin-bottom:15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom:15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width:540px;
    margin-bottom:15px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.div`
    color:#CCA459;
    font-size:16px;
    line-height:16px;
    font-weight:700;
    letter-spacing: 1.4px;
    text-transformation: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    color:#01bf71;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color: ${({lightText}) => (lightText ? '#f7f8f8' : '#010606')
    };
    @media screen and (max-width:480px) {
    font-size:32px;
    }
`

export const Subtitle = styled.p`
    max-width:440px;
    margin-bottom:35px;
    margin-top:35px;
    font-size:18px;
    line-height:24px;
    font-weight:600;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')
    };
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content:flex-start;
`

export const ImgWrap = styled.div`
    max-width:555px;
    height:100%;
`

export const Img = styled.img`
    width:100%;
    margin: 0 0 10px 0;
    padding-right:0;
`

export const LatestContainer = styled.div`
   height: 800px;
   display: flex;
   flex-direction: column;
   justify-content:center;
   align-items: center;
   background: #010606;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 400px){
        height: 1300px;
    }
`


export const LatestWrapper = styled.div`
    max-width:1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
   
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const LatestCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding:30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

`
export const LatestIcon = styled.img`
   height:160px;
   width:160px;
   margin-bottom:10px; 
`
export const LatestH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const LatestH11 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 3.5rem;
    }
`
export const LatestH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const LatestP = styled.p`
    font-size: 1rem;
    text-align: center;
`