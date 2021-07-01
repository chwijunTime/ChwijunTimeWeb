import React, { useState } from 'react';
import * as S from './style';
import { submitTag } from 'service/post';

interface Props {
    handleModal: (status: boolean) => void
}

const CorrectionModal:React.FC<Props> = ({handleModal}) => {
    const [tag, setTag] = useState('');

    const EnrollTag = async () => {
        try {
            const { data } = await submitTag(tag);
            data.success ? (alert('등록되었습니다.'), window.location.replace('/tag')): alert(data.msg);   
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <S.ModalContainer>
            <S.TagModal>
                <S.Title>태그 등록</S.Title>
                <S.InputText placeholder="입력..." onChange={(e) => setTag(e.target.value)} />
                <S.BtnPlace>
                    <S.ConfirmBtn onClick={() => EnrollTag()}>확인</S.ConfirmBtn>
                    <S.CancleBtn onClick={() => handleModal(false)}>취소</S.CancleBtn>
                </S.BtnPlace>
            </S.TagModal>
        </S.ModalContainer>
    )
}

export default CorrectionModal;