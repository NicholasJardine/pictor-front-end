import styled from 'styled-components'
import {Link} from 'react-scroll'

const Button = styled(Link)`
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

export default Button



