import React from 'react';
import { CabinetButton } from './styled';
const CabinetButtonStyled = ({disabled=false}: {disabled?: boolean}) => {
    return (
        <CabinetButton disabled={disabled}>Личный кабинет</CabinetButton>
    );
};

export default CabinetButtonStyled;