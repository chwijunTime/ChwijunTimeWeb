import React, { useState, useEffect, useRef, Fragment } from 'react';
import * as S from './style';
import { setAccessToken, setRefreshToken } from 'service/token';
import axios from 'axios';
import { BaseUrl } from 'config/config.json';

interface Props {
    handleSignInModal: (status: boolean) => void;
    handleSignUpModal: (status: boolean) => void;
}

const SignInModal:React.FC<Props> = ({handleSignInModal, handleSignUpModal}: Props) => {
    const setOpen = useRef<any>();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            clickBtn();
        }
    }
    const clickBtn = async () => {
        if(id === '' || pw === '') {
            id === '' ? alert("이메일을 입력해주세요.") :( pw === '' ? alert("비밀번호를 입력해주세요.") : '')
            return;
        }

        await axios.post(`${BaseUrl}/v1/login`, {
            "memberEmail": id,
            "memberPassword": pw
        })
        .then(res => {
            const { data } = res;
            if(data.success === true) {
                localStorage.setItem('email', data.data.memberEmail);
                localStorage.setItem('roles', data.data.roles);
                setAccessToken(data.data.accessToken);
                setRefreshToken(data.data.refreshToken);
                window.location.replace('/notice');
            } else if(data.success === false) {
                alert(data.msg);
            }
        })
        .catch(function(error) {
            return(error.response);
        })
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
                        <S.InputText autoFocus type="text" placeholder="E-Mail(ID)" onChange={(e) => setId(e.target.value)} />
                        <S.InputText type="password" placeholder="Password" onChange={(e) => setPw(e.target.value)}
                        onKeyPress={handleKeyPress}  />
                        <S.SaveIdPlace>
                            <S.IsCheckIdSave type="checkbox" onChange={(e) => setIsChecked(e.target.checked) }/>
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