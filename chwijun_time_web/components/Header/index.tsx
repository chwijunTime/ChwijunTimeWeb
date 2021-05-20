import React, { Fragment } from 'react';
import * as S from './style';

const Header:React.FC = ({ children }) => {
    return(
        <Fragment>
            <S.HeadTitle>{children}</S.HeadTitle>
            <S.DivisionLine />
        </Fragment>
        
    )
}

export default Header;