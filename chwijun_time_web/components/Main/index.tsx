import React, { Fragment, useState } from 'react';
import * as S from './style';
import { Logo } from 'public/index';
import { SignInModal, SignUpModal } from 'components/Modal';

interface LoginInfo {
    isLogin: boolean;
}

const Main:React.FC<LoginInfo> = ({isLogin}) => {
    const [signInModal, setSignInModal] = useState(false)
    const [signUpModal, setSignUpModal] = useState(false)

    const handleSignInModal = (status: boolean) => {
        setSignInModal(status);
    }
    const handleSignUpModal = (status: boolean) => {
        setSignUpModal(status);
    }

    return(  
        <Fragment>
        <S.MainPlace signInBlur={signInModal} signUpBlur={signUpModal} >      
                <S.Head>
                    <S.LeftHead>      
                        <S.Logo><Logo /></S.Logo>
                    </S.LeftHead>            
                </S.Head>
                <S.IntroPlace>
                    <S.Intro>취업 준비가 어려우신가요?</S.Intro>
                    <S.Explain>
                        취준타임을 통해 학교에 들어온 공고와 MOU 체결을 맺은 기업정보, 취업 진로부 선생님과의
                        상담신청, 포트폴리오 공유와 작성 등 취업에 관련된 많은 도움을 받을 수 있습니다.
                    </S.Explain>
                    <S.StartBtn onClick={() => setSignInModal(true)} >지금 바로 시작하기</S.StartBtn>
                </S.IntroPlace>
                <S.BackgroundImg src={'./Company.png'} />          
        </S.MainPlace>
            { signInModal && <SignInModal handleSignInModal={handleSignInModal} handleSignUpModal={handleSignUpModal} /> }
            { signUpModal && <SignUpModal handleSignUpModal={handleSignUpModal} /> }
        </Fragment>
    )
}

export default Main;