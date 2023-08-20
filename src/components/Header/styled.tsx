import { styled } from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 30px 320px;
`;

export const Logo = styled.a`
  width: 128px;
  height: 55px;
  margin-right: 416px;
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 7em;
  align-items: center;
`

export const TitleItem = styled.a`
  color: #CECECE;
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 27.6px */
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    color: #C3F33B;

  }
`