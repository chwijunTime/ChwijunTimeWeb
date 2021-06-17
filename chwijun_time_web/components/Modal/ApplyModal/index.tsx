import React from 'react';
import * as S from './style';

interface Props {
    handleModal: (status: boolean) => void,
    handleLocation: (status: string) => void,
    currentLocation: string
}

const ApplyModal:React.FC<Props> = (handleModal, handle) => {
    return(
        <S.ModalContainer>
            <S.ApplyModal>
                
            </S.ApplyModal>
        </S.ModalContainer>
    )
}

export default ApplyModal;