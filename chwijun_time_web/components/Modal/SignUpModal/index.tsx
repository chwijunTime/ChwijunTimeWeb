import React, { useState, useRef, useEffect } from 'react';
import * as S from './style';

interface Props {
    handleSignUpModal: (status: boolean) => void;
}

const SignUpModal = ({handleSignUpModal}: Props) => {
    const setOpen = useRef<HTMLDivElement>();
    const [idExist, setIdExist] = useState(false);
    // 이건 서버에서 가져온 태그 목록
    const tagList = useState(['ABcd', 'Efgh', 'ijkl', 'mnop', 'qrst', 'uvwx', 'yzae']);
    // 이건 사용자가 입력한 태그 목록
    const [userTag, setUserTag] = useState([]);
    // 사용자가 입력한 값.
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
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

    const FilterUserInput = tagList.filter(tagList => 
        console.log('gea', tagList.toString().toLowerCase().includes(userInput)),
        tagList.toString().toLowerCase().includes(userInput));

    return(
        <S.ModalContainer>
            
            <S.SignUp ref={setOpen}>
                <S.Content>
                    <S.Text>회원가입</S.Text>
                    <S.InputText type="text" placeholder="E-Mail(ID)"/>
                    <S.OverlapPlace>
                         <S.OverlapText exist={idExist} >
                             { idExist === true ? "이미 사용 중인 이메일입니다!" : "사용 가능한 이메일입니다."}
                         </S.OverlapText>
                        <S.OverlapBtn>중복 확인</S.OverlapBtn>
                    </S.OverlapPlace>
                    <S.InputText type="password" placeholder="Password" />
                    <S.InputText type="password" placeholder="Confirm Password"/>
                    <S.SInputText placeholder="학번 ex)3101" />
                    <S.SInputText placeholder="학번 ex)3101" />
                    <S.InputText placeholder="휴대전화 번호"/>
                    <S.SInputText placeholder="태그" onChange={(e) => setUserInput(e.target.value)} />
                    <S.TagPlace>
                        

                        
                    </S.TagPlace>
                </S.Content>
            </S.SignUp>
        </S.ModalContainer>
    )
}

export default SignUpModal;