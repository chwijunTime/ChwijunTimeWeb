import React from 'react';
import Image from 'next/image';
import * as S from './style';

const Main:React.FC = () => {
    return(
        <S.MainPlace>
            <S.Head>
                <S.Logo src={'/Logo.png'} />
                <S.LoginRegister>
                    <S.Login>로그인</S.Login>
                    <S.Register>회원가입</S.Register>
                </S.LoginRegister>
            </S.Head>
            <S.IntroPlace>
                <S.Intro>취업 준비가 어려우신가요?</S.Intro>
                <S.Explain>
                    취준타임을 통해 학교에 들어온 공고와 MOU 체결을 맺은 기업정보, 취업 진로부 선생님과의
                    상담신청, 포트폴리오 공유와 작성 등 취업에 관련된 많은 도움을 받을 수 있습니다.
                </S.Explain>
                <S.StartBtn>지금 바로 시작하기</S.StartBtn>
            </S.IntroPlace>
            <S.BackgroundImg src={'/Company.png'} />
        </S.MainPlace>
    )
}

export default Main