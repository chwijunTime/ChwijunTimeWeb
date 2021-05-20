import React from 'react';
import * as S from './style';

const JobNoticeComponent:React.FC = () => {
    return(
        <S.JobNoticeContainer>
            <S.Header>취업 공고</S.Header>
            <S.Container>
                <S.Content>
                    <S.Title>업체 소개</S.Title>
                </S.Content>
            </S.Container>
        </S.JobNoticeContainer>
        
    )
}

export default JobNoticeComponent;