import React, { useState } from 'react';
import * as S from './style';
import { submitApplyConsult } from 'service/post';

interface Props {
    handleModal: (status: boolean) => void,
    consultIdx: number
}

const ApplyModal:React.FC<Props> = ({handleModal, consultIdx}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const ApplyConsult = async () => {
        try {
            const { data } = await submitApplyConsult(number, name, consultIdx);
            data.success ? (alert('신청되었습니다.'), window.location.replace('/consult')): alert(data.msg);
            
        } catch (error) {
            console.log(error);
        }
        
    }

    return(
        <S.ModalContainer>
            <S.ApplyModal>
                <S.Title>학생 정보 입력</S.Title>
                <S.InputText placeholder="학번" onChange={(e) => setNumber(e.target.value)} />
                <S.InputText placeholder="이름" onChange={(e) => setName(e.target.value)} />
                <S.BtnPlace>
                    <S.ConfirmBtn onClick={() => {ApplyConsult()}} >확인</S.ConfirmBtn>
                    <S.CancleBtn onClick={() => handleModal(false)}>취소</S.CancleBtn>
                </S.BtnPlace>
            </S.ApplyModal>
        </S.ModalContainer>
    )
}

export default ApplyModal;