import React, { useState, useRef, useEffect } from 'react';
import * as S from './style';

interface Props {
    handleSignUpModal: (status: boolean) => void;
}

const SignUpModal = ({handleSignUpModal}: Props) => {
    // 외부 영역 클릭 시 모달 창을 닫기 위한 ref 설정 변수
    const setOpen = useRef<HTMLDivElement>();
    // 회원가입 시 서버로부터 id가 이미 존재하는 지 판별하는 변수
    const [idExist, setIdExist] = useState(false);
    // 사용자가 입력한 id
    const [inputId, setInputId] = useState('');
    // 사용자가 입력한 ps
    const [inputPs, setInputPs] = useState('');
    // 사용자가 입력한 비밀번호 확인
    const [confirmPs, setConfirmPs] = useState('');
    // 비밀번호가 일치하는 지 판별하는 변수
    const [isCorrect, setIsCorrect] = useState(true);
    // id가 존재하는 지 존재하지 않는 지 text 담을 변수
    const [isExist, setIsExist] = useState('');
    // ps가 일치하는 지 일치하지 않는 지 text 담을 변수
    const [correct, setCorrect] = useState('');


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

    // id 중복 확인 버튼 클릭 시 실행되는 함수
    const isExistId = (inputId: String) => {
        // 서버에 값을 보내고, 그 반환된 결과를 여기에 적으세요.
        if(inputId === "") {
            setIsExist("이메일을 입력해주세요.");
            return;
        }
        if(idExist) {
            setIsExist("이미 존재하는 이메일입니다!");
        } else {
            setIsExist("사용가능한 이메일입니다.");
        }
    }
    // 회원가입 버튼 클릭 시 비번이 일치하는 지 확인하는 함수
    const isCorrectPs = (inputPs: String, confirmPs: String) => {
        if(inputPs === "" || confirmPs === "") {
            setCorrect("비밀번호를 입력해주세요!");
        } else if(inputPs !== confirmPs) {
            setCorrect("비밀번호가 일치하지 않습니다.");
        } else {
            setCorrect("");
        }
    }

    return(
        <S.ModalContainer>
            
            <S.SignUp ref={setOpen}>
                <S.Content>
                    <S.Text>회원가입</S.Text>
                    <S.InputText type="text" placeholder="E-Mail(ID)" onChange={(e) => setInputId(e.target.value)} />
                    <S.OverlapPlace>
                         <S.OverlapText exist={idExist} >
                             { isExist }
                         </S.OverlapText>
                        <S.OverlapBtn onClick={() => isExistId(inputId)} >중복 확인</S.OverlapBtn>
                    </S.OverlapPlace>
                    <S.InputText type="password" placeholder="Password" onChange={(e) => setInputPs(e.target.value)} />
                    <S.InputText type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPs(e.target.value)} />
                    <S.IsCorrectPs>
                        { correct }
                    </S.IsCorrectPs>
                    <S.SignUpBtn onClick={() => isCorrectPs(inputPs, confirmPs)} >회원가입</S.SignUpBtn>
                </S.Content>
            </S.SignUp>
        </S.ModalContainer>
    )
}

export default SignUpModal;