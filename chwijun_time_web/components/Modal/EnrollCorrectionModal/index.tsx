import React, { useState } from 'react';
import * as S from './style';
import { submitResume, submitPortfolio } from 'service/post';

interface Props {
    handleModal: (status: boolean) => void,
    isResume: boolean
}

const EnrollCorrectionModal:React.FC<Props> = ({handleModal, isResume}) => {
    const [url, setUrl] = useState('');

    const EnrollPortfolio = async () => {
        try {
            const { data } = await submitPortfolio(url);
            data.success ? (alert('등록되었습니다.'), window.location.replace('/portfolio')): alert(data.msg);   
        } catch (error) {
            console.log(error);
        }
    }
    const EnrollResume = async () => {
        try {
            const { data } = await submitResume(url);
            data.success ? (alert('등록되었습니다.'), window.location.replace('/portfolio')): alert(data.msg);   
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <S.ModalContainer>
            <S.TagModal>
                <S.Title>{isResume ? '내 이력서 등록' : '내 포트폴리오 등록'}</S.Title>
                <S.InputText placeholder="입력..." onChange={(e) => setUrl(e.target.value)} />
                <S.BtnPlace>
                    <S.ConfirmBtn onClick={() => isResume ? EnrollResume() : EnrollPortfolio()}>확인</S.ConfirmBtn>
                    <S.CancleBtn onClick={() => handleModal(false)}>취소</S.CancleBtn>
                </S.BtnPlace>
            </S.TagModal>
        </S.ModalContainer>
    )
}

export default EnrollCorrectionModal;