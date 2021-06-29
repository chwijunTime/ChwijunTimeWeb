import React, { useState } from 'react';
import * as S from './style';
import { submitApplyJobNotice } from 'service/post';

interface Props {
    handleModal: (status: boolean) => void,
    idx: number
}

const JobApplyModal:React.FC<Props> = ({handleModal, idx}) => {
    const [portfolioUrl, setPortfolioUrl] = useState('');
    const [resumeUrl, setResumeUrl] = useState('');
    const [gitHubUrl, setGitHubUrl] = useState('');

    const ApplyJobNotice = async () => {
        try {
            const { data } = await submitApplyJobNotice(portfolioUrl, resumeUrl, gitHubUrl, idx);
            data.success ? (alert('신청되었습니다.'), window.location.replace('/jobnotice')): alert(data.msg);           
        } catch (error) {
            console.log(error);
        }  
    }

    return(
        <S.ModalContainer>
            <S.ApplyModal>
                <S.Title>취업 공고 신청</S.Title>
                <S.InputText placeholder="포트폴리오 URL을 입력해주세요." onChange={(e) => setPortfolioUrl(e.target.value)} />
                <S.InputText placeholder="이력서 URL을 입력해주세요." onChange={(e) => setResumeUrl(e.target.value)} />
                <S.InputText placeholder="깃허브 URL을 입력해주세요." onChange={(e) => setGitHubUrl(e.target.value)} />
                <S.BtnPlace>
                    <S.ConfirmBtn onClick={() => {ApplyJobNotice()}} >확인</S.ConfirmBtn>
                    <S.CancleBtn onClick={() => handleModal(false)}>취소</S.CancleBtn>
                </S.BtnPlace>
            </S.ApplyModal>
        </S.ModalContainer>
    )
}

export default JobApplyModal;