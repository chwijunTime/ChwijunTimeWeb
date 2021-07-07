import React, { useState } from 'react';
import * as S from './style';
import { modifyPortfolio, modifyResume } from 'service/put';

interface Props {
    handleModal: (status: boolean) => void,
    isResume: boolean,
    idx: number
}

const ModifyPortfolioModal:React.FC<Props> = ({handleModal, isResume, idx}) => {
    const [link, setLink] = useState('');

    const ModifyPortfolio = async () => {
        try {
            const { data } = await modifyPortfolio(link, idx);
            data.success ? (alert('수정되었습니다.'), window.location.replace('/portfolio')): alert(data.msg);   
        } catch (error) {
            console.log(error);
        }
    }
    const ModifyResume = async () => {
        try {
            const { data } = await modifyResume(link, idx);
            data.success ? (alert('수정되었습니다.'), window.location.replace('/portfolio')): alert(data.msg);   
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <S.ModalContainer>
            <S.TagModal>
                <S.Title>수정</S.Title>
                <S.InputText placeholder="입력..." onChange={(e) => setLink(e.target.value)} />
                <S.BtnPlace>
                    <S.ConfirmBtn onClick={() => isResume ? ModifyResume() : ModifyPortfolio()}>수정</S.ConfirmBtn>
                    <S.CancleBtn onClick={() => handleModal(false)}>취소</S.CancleBtn>
                </S.BtnPlace>
            </S.TagModal>
        </S.ModalContainer>
    )
}

export default ModifyPortfolioModal;