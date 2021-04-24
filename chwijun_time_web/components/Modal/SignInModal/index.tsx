import React, { useEffect, useRef, Fragment } from 'react';
import * as S from './style';

interface Props {
    handleSignInModal: (status: boolean) => void;
    handleSignUpModal: (status: boolean) => void;
}

const SignInModal:React.FC<Props> = ({handleSignInModal, handleSignUpModal}: Props) => {
    const setOpen = useRef<HTMLDivElement>();

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if(setOpen && !setOpen.current?.contains(e.target as Node)) {
                handleSignInModal(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [setOpen])

    return(
        <Fragment> 
            <S.ModalContainer>
                <S.SignIn ref={setOpen} >
                    <S.Content>
                        <S.Text>로그인</S.Text>
                        <S.InputText type="text" placeholder="E-Mail(ID)" />
                        <S.InputText type="password" placeholder="Password" />
                        <S.SaveIdPlace>
                            <S.IsCheckIdSave type="checkbox" />
                            <div style={{fontSize: "11px", paddingLeft: "5px"}}>아이디 저장</div>
                        </S.SaveIdPlace>
                        <S.LoginButton>로그인</S.LoginButton>
                        <S.TextPlace>
                            <S.Psword>비밀번호 찾기</S.Psword>
                            <S.Register onClick={() => {handleSignUpModal(true)}} >회원가입</S.Register>
                        </S.TextPlace>
                    </S.Content>
                </S.SignIn>
            </S.ModalContainer>
        </Fragment>        
    )
}

export default SignInModal;