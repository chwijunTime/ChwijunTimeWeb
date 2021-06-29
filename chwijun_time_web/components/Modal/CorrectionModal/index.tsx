import React, { useState } from 'react';
import * as S from './style';
import { submitRejectCorrection, submitAcceptCorrection } from 'service/post';

interface Props {
    handleModal: (status: boolean) => void,
    idx: number,
    clicked: boolean,
    classNumber: string
}

const CorrectionModal:React.FC<Props> = ({handleModal, idx, clicked, classNumber}) => {
    const [content, setContent] = useState('');

    const AcceptCorrection = async () => {
        try {
            const { data } = await submitAcceptCorrection(classNumber, content, idx);
            data.success ? (alert('수락되었습니다.'), window.location.replace('/portfolio')): alert(data.msg);   
        } catch (error) {
            console.log(error);
        }
    }
    const RejectCorrection = async () => {
        try {
            const { data } = await submitRejectCorrection(classNumber, content, idx);
            data.success ? (alert('거절되었습니다.'), window.location.replace('/portfolio')): alert(data.msg);   
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <S.ModalContainer>
            <S.CorrectionModal>
                <S.Title>{clicked ? '첨삭 내용' : '거절 사유'}</S.Title>
                <S.InputText placeholder="입력..." onChange={(e) => setContent(e.target.value)} />
                <S.BtnPlace>
                    <S.ConfirmBtn onClick={() => clicked ? AcceptCorrection() : RejectCorrection()}>확인</S.ConfirmBtn>
                    <S.CancleBtn onClick={() => handleModal(false)}>취소</S.CancleBtn>
                </S.BtnPlace>
            </S.CorrectionModal>
        </S.ModalContainer>
    )
}

export default CorrectionModal;