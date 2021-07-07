import React, { useEffect, useState } from 'react';
import * as S from './style';
import { getIdxJobNotice } from 'service/get';
import Router from 'next/router';
import ModifyJobNotice from '../Modify_JobNotice';

const JobNoticeElement:React.FC = () => {
    const [jobNoticeIdx, setJobNoticeIdx] = useState(typeof window !== 'undefined' ? window.location.href.split('/')[4] : '');
    const roles = typeof window !== 'undefined' ? localStorage.getItem('roles') : '';
    const [jobNoticeInfo, setJobNoticeInfo] = useState<any>();
    const [modify, handleModify] = useState(false);
  
    useEffect(() => {
        async function getIdxJobNoticeList() {
            try {
                const { data } = await getIdxJobNotice(parseInt(jobNoticeIdx));
                console.log(data);
                setJobNoticeInfo(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getIdxJobNoticeList();
    }, [])
    
    return(
        !modify ? <S.JobNoticeContainer>       
            <S.Header>
                <S.UrlText>HOME &gt; 취업 공고</S.UrlText>
                <S.HeaderPlace>
                    <S.HeaderTitle>취업 공고
                        <S.Sub_HeaderTitle>학교에 들어온 취업 공고 정보입니다.</S.Sub_HeaderTitle>
                    </S.HeaderTitle>
                    <S.ModifyPlace>
                        { roles === 'ROLE_Admin' && <S.ModifyBtn onClick={() => handleModify(true)}>수정</S.ModifyBtn> }
                    </S.ModifyPlace>
                </S.HeaderPlace>
            </S.Header>
            <S.ContentPlace>
                <S.TitlePlace>{ jobNoticeInfo && jobNoticeInfo.employmentAnnouncementName }</S.TitlePlace>
                <S.Content>
                    <S.Property>회사 설명</S.Property>
                    <S.Explain>{ jobNoticeInfo && jobNoticeInfo.employmentAnnouncementExplanation }</S.Explain>
                    
                    <S.Property>주소</S.Property>
                    <S.Explain>{ jobNoticeInfo && jobNoticeInfo.employmentAnnouncementAddress }</S.Explain>

                    <S.Property>채용 분야</S.Property>
                    <S.Explain>{ jobNoticeInfo && jobNoticeInfo.recruitmentField }</S.Explain>

                    <S.Property>기타</S.Property>
                    <S.Explain>{ jobNoticeInfo && jobNoticeInfo.employmentAnnouncementEtc }</S.Explain>

                    <S.Property>마감일</S.Property>
                    <S.Explain>{ jobNoticeInfo && jobNoticeInfo.deadLine }</S.Explain>

                    { jobNoticeInfo && (
                            <>
                                <S.Property>태그</S.Property>
                                {
                                jobNoticeInfo.employmentAnnouncementTags.map((obj, idx) => {
                                    return <S.Explain key={idx}>{obj}</S.Explain>
                                })
                                }                   
                            </>
                    )}
                </S.Content>
                <S.BtnPlace>
                    <S.ListBtn onClick={() => Router.push('/jobnotice')}>목록</S.ListBtn>
                </S.BtnPlace>
            </S.ContentPlace>
        </S.JobNoticeContainer> : <ModifyJobNotice info={jobNoticeInfo} idx={parseInt(jobNoticeIdx)} />
    )
}

export default JobNoticeElement;