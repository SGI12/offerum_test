import React from 'react';
import { 
    HeaderStyled,
    Logo,
    TitleContainer,
    TitleItem
 } from './styled';

 import CabinetButtonStyled from '../CabinetButton';

export const Header = (): React.ReactElement => {
    return (
        <HeaderStyled>
            <Logo href="#">
                <img className='img' src='../../assets/logo_nft.svg' alt='linktogit'/>
            </Logo>
            <TitleContainer>
                <TitleItem>Главная</TitleItem>
                <TitleItem>Что даст обучение</TitleItem> 
                <CabinetButtonStyled></CabinetButtonStyled>
            </TitleContainer>
        </HeaderStyled>
    );
}