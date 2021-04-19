import React from 'react';
import Image from 'next/image';
import * as S from './style';

const Header:React.FC = () => {
    return(
        <S.HeaderPlace>
            <S.HeaderLeft>
                <S.Logo src={'/Logo.png'} />
                <S.Text>취업</S.Text>
                <S.Text>공지사항</S.Text>
                <S.Text>취업</S.Text>
                <S.Text>취업</S.Text>
            </S.HeaderLeft>
            <S.HeaderRight>
                <S.Text>
                    <S.InfoLogin>Info</S.InfoLogin>
                    <S.InfoLogin>Login</S.InfoLogin>
                </S.Text>
            </S.HeaderRight>      
        </S.HeaderPlace>
    )
}

export default Header;