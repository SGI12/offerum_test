import { styled } from "styled-components";

export const CabinetButton = styled.button`
    
display: inline-flex;
padding: 16px 22px;
justify-content: center;
align-items: center;
border-radius: 15px;
border: 1px solid #FFF;
color: #FFF;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
width: 135px;
white-space: nowrap;
background-color: transparent;
cursor: pointer;

&:disabled {
    cursor: not-allowed;
}

&:hover {
    border: 1px solid #C3F33B;
    color: #C3F33B;
}

&:active {
    border: 1px solid #C3F33B;
    background: rgba(224, 255, 172, 0.05);
    backdrop-filter: blur(7.5px);
    color: #C3F33B;
}
`