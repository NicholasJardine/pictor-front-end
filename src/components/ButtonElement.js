import styled from 'styled-components'
import {Link} from 'react-scroll'

const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#CCA459' : '#010606')
    };
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')
    };
    color: ${({dark}) => (dark ? '#010606' : ' #fff')
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
        color:#010606;
        background: ${({primary}) => (primary ? '#CCA459' : '#CCA459')};
        border:solid 2px;
        border-color: ${({primary}) => (primary ? '#fff' : '#010606')};
    }
`;

export default Button