import React, { useState } from 'react';
import * as S from './style';
import { useEffect } from 'react';
import { getApplyJobNotice } from 'service/get';

interface Props {
    handleModal: (status: boolean) => void,
    idx: number
}

const JobApproveModal:React.FC<Props> = ({handleModal, idx}) => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        async function getJobApproveData() {
            try {
                const { data } = await getApplyJobNotice(idx);
                setData(data.data);
            } catch(error) {
                console.log(error);
            }
        }
        getJobApproveData();
    }, []);
 
    return(
        <S.ModalContainer>
            <S.ApplyModal>
                <S.Title>{data.memberClassNumber}님의 이력서 및 포트폴리오</S.Title>
                <S.LinkPlace target="_blank" href={`${data.applicationEmploymentResumeURL}`}>[이력서]</S.LinkPlace>
                <S.LinkPlace target="_blank" href={`${data && data.applicationEmploymentPortfolioURL}`}>[포트폴리오]</S.LinkPlace>
                <S.LinkPlace target="_blank" href={`${data && data.gitHubURL}`}>[깃허브]</S.LinkPlace>
                <S.BtnPlace>
                    <S.ConfirmBtn onClick={() => handleModal(false)} >확인</S.ConfirmBtn>
                    <S.CancleBtn onClick={() => handleModal(false)}>취소</S.CancleBtn>
                </S.BtnPlace>
            </S.ApplyModal>
        </S.ModalContainer>
    )
}

export default JobApproveModal;