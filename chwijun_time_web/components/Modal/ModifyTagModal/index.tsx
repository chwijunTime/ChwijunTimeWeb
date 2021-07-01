import React, { useState } from 'react';
import * as S from './style';
import { modifyTag } from 'service/put';

interface Props {
    handleModal: (status: boolean) => void,
    idx: number
}

const ModifyTagModal:React.FC<Props> = ({handleModal, idx}) => {
    const [tag, setTag] = useState('');

    const ModifyTag = async () => {
        try {
            const { data } = await modifyTag(idx, tag);
            data.success ? (alert('수정되었습니다.'), window.location.replace('/tag')): alert(data.msg);   
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <S.ModalContainer>
            <S.TagModal>
                <S.Title>태그 수정</S.Title>
                <S.InputText placeholder="입력..." onChange={(e) => setTag(e.target.value)} />
                <S.BtnPlace>
                    <S.ConfirmBtn onClick={() => ModifyTag()}>확인</S.ConfirmBtn>
                    <S.CancleBtn onClick={() => handleModal(false)}>취소</S.CancleBtn>
                </S.BtnPlace>
            </S.TagModal>
        </S.ModalContainer>
    )
}

export default ModifyTagModal;