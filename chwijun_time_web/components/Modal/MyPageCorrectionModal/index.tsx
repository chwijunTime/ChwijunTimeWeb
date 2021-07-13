import React from 'react';
import * as S from './style';

interface Props {
    handleModal: (status: boolean) => void,
    info: any
}

const MyPageCorrectionModal:React.FC<Props> = ({handleModal, info}) => {

    return(
        <S.ModalContainer>
            <S.CorrectionModal>
                <S.Title>{info.correctionStatus === 'Correction_Successful' ? '첨삭내용' : '거절사유'}</S.Title>
                <S.InputText>{info.correctionStatus === 'Correction_Successful' ? info.correctionContent : info.reasonForRejection}</S.InputText>
                <S.BtnPlace>
                    <S.ConfirmBtn onClick={() => handleModal(false)}>확인</S.ConfirmBtn>
                    <S.CancleBtn onClick={() => handleModal(false)}>취소</S.CancleBtn>
                </S.BtnPlace>
            </S.CorrectionModal>
        </S.ModalContainer>
    )
}

export default MyPageCorrectionModal;