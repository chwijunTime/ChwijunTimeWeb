import React, { useEffect, useState } from 'react';
import * as S from './style';
import { getIdxMou } from 'service/get';
import Router from 'next/router';

const MouElement:React.FC = () => {
    const [mouIdx, setMouIdx] = useState(typeof window !== 'undefined' ? window.location.href.split('/')[4] : '');
    const [mouInfo, setMouInfo] = useState<any>();
  
    useEffect(() => {
        async function getIdxMouList() {
            try {
                const { data } = await getIdxMou(parseInt(mouIdx));
                console.log(data);
                setMouInfo(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getIdxMouList();
    }, [])
    
    return(
        <S.MouContainer>       
            <S.Header>
                <S.UrlText>HOME &gt; 협약 업체</S.UrlText>
                <S.HeaderTitle>협약 업체
                    <S.Sub_HeaderTitle>학교와 MOU 체결을 맺은 기업 정보입니다.</S.Sub_HeaderTitle>
                </S.HeaderTitle>
            </S.Header>
            <S.ContentPlace>
                <S.TitlePlace>{ mouInfo && mouInfo.contractingCompanyName }</S.TitlePlace>
                <S.Content>
                    <S.Property>회사 설명</S.Property>
                    <S.Explain>{ mouInfo && mouInfo.contractingCompanyAboutUs }</S.Explain>
                    
                    <S.Property>주소</S.Property>
                    <S.Explain>{ mouInfo && mouInfo.contractingCompanyAddress }</S.Explain>

                    <S.Property>사업 분야</S.Property>
                    <S.Explain>{ mouInfo && mouInfo.contractingBusinessAreas }</S.Explain>

                    <S.Property>연봉</S.Property>
                    <S.Explain>{ mouInfo && mouInfo.contractingCompanyAverageAnnualSalary }</S.Explain>

                    { mouInfo && (
                            <>
                                <S.Property>태그</S.Property>
                                {
                                mouInfo.contractingCompanyTags.map((obj, idx) => {
                                    return <S.Explain key={idx}>{obj}</S.Explain>
                                })
                                }                   
                            </>
                    )}
                </S.Content>
                <S.BtnPlace>
                    <S.ListBtn onClick={() => Router.push('/mou')}>목록</S.ListBtn>
                </S.BtnPlace>
            </S.ContentPlace>
        </S.MouContainer>
    )
}

export default MouElement;