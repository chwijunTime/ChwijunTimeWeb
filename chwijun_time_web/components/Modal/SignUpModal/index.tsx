import React, { useState, useRef, useEffect } from 'react';
import * as S from './style';
import { submitSignUpInfo } from 'service/post';

interface Props {
    handleSignUpModal: (status: boolean) => void;
}

const SignUpModal = ({handleSignUpModal}: Props) => {

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            isCorrectPs(pw, confirmPw);
        }
    }
    // 외부 영역 클릭 시 모달 창을 닫기 위한 ref 설정 변수
    const setOpen = useRef<HTMLDivElement>();
    // 사용자가 입력한 id
    const [id, setId] = useState('');
    // 사용자가 입력한 ps
    const [pw, setPw] = useState('');
    // 사용자가 입력한 비밀번호 확인
    const [confirmPw, setConfirmPw] = useState('');
    // 사용자가 입력한 학번
    const [num, setNum] = useState('');
 
    useEffect(() => {
        // 외부 영역 클릭 시 모달 창을 닫는 함수
        function handleClickOutside(e: MouseEvent) {
            if(setOpen && !setOpen.current?.contains(e.target as Node)) {
                handleSignUpModal(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [setOpen])

    // 회원가입 버튼 클릭 시 비번이 일치하는 지 확인하는 함수
    const isCorrectPs = async (inputPs: string, confirmPs: string) => {
        if(inputPs === "" || confirmPs === "") {
            alert("비밀번호를 입력해주세요!");
        } else if(inputPs !== confirmPs) {
            alert("비밀번호가 일치하지 않습니다.");
        } else {
            const { data } = await submitSignUpInfo(id, pw, num);
            if(data.success === false) {
                alert(data.msg);
            } else {
                alert("회원가입이 완료되었습니다.");
                handleSignUpModal(false);
            }
        }
    }

    return(
        <S.ModalContainer>
            
            <S.SignUp ref={setOpen}>
                <S.Content>
                    <S.Text>회원가입</S.Text>
                    <S.InputText type="text" placeholder="E-Mail(ID)" onChange={(e) => setId(e.target.value)} />
                    <S.Space />
                    <S.InputText type="password" placeholder="Password" onChange={(e) => setPw(e.target.value)} />
                    <S.InputText type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPw(e.target.value)} />
                    <S.Space />
                    <S.ClassNumber placeholder="학번 ex)3101" onChange={(e) => {setNum(e.target.value)}}
                    onKeyPress={handleKeyPress} />
                    <S.SignUpBtn onClick={() => isCorrectPs(pw, confirmPw)} >회원가입</S.SignUpBtn>
                </S.Content>
            </S.SignUp>
        </S.ModalContainer>
    )
}

export default SignUpModal;