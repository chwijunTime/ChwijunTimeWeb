import React, { useState, useEffect, useRef, Fragment } from 'react';
import * as S from './style';

interface Props {
    handleSignInModal: (status: boolean) => void;
    handleSignUpModal: (status: boolean) => void;
}

const SignInModal:React.FC<Props> = ({handleSignInModal, handleSignUpModal}: Props) => {
    const setOpen = useRef<HTMLDivElement>();
    const [inputId, setInputId] = useState('');
    const [inputPs, setInputPs] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const clickBtn = () => {
        if(inputId === "") {
            alert("E-Mail을 입력해주세요.");
            return;
        } else if(inputPs === "") {
            alert("비밀번호를 입력해주세요.");
            return;
        } if(isChecked) {
            localStorage.setItem("E-Mail", inputId);
        }
        alert("로그인 성공");
    }

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
                        <S.InputText type="text" placeholder="E-Mail(ID)" onChange={(e) => setInputId(e.target.value)} />
                        <S.InputText type="password" placeholder="Password" onChange={(e) => setInputPs(e.target.value)} />
                        <S.SaveIdPlace>
                            <S.IsCheckIdSave type="checkbox" onChange={(e) => setIsChecked(e.target.checked) } />
                            <div style={{fontSize: "11px", paddingLeft: "5px"}}>아이디 저장</div>
                        </S.SaveIdPlace>
                        <S.LoginButton onClick={() => clickBtn()} >로그인</S.LoginButton>
                        <S.TextPlace>
                            <S.Register onClick={() => {handleSignUpModal(true)}} >회원가입</S.Register>
                        </S.TextPlace>
                    </S.Content>
                </S.SignIn>
            </S.ModalContainer>
        </Fragment>        
    )
}

export default SignInModal;